const openaiService = require('../services/openaiService');
const googleSheetsService = require('../services/googleSheetsService');
const sessionService = require('../services/sessionService');
const restaurantData = require('../utils/restaurantData');
const config = require('../config');
const axios = require('axios');

const verifyWebhook = (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode === 'subscribe' && token === config.whatsapp.verifyToken) {
    return res.status(200).send(challenge);
  }
  return res.sendStatus(403);
};

const handleIncomingMessage = async (req, res) => {
  try {
    const body = req.body;
    if (!body.entry || !body.entry[0].changes[0].value.messages) return res.sendStatus(200);
    const message = body.entry[0].changes[0].value.messages[0];
    if (!message.text) return res.sendStatus(200);
    const userId = message.from;
    const userText = message.text.body;
    const session = sessionService.getSession(userId);

    if (session.order.isFirstMessage) {
      const greeting = `حياك الله! 👋\n\n${restaurantData.greetings.ar}\n\nكيف أقدر أخدمك اليوم؟ 😊`;
      sessionService.updateSession(userId, { order: { isFirstMessage: false } });
      await sendWhatsAppMessage(userId, greeting);
      return res.sendStatus(200);
    }

    const aiResponse = await openaiService.getAIResponse(userText, session);
    sessionService.updateSession(userId, { message: userText, role: 'user' });
    sessionService.updateSession(userId, { message: aiResponse, role: 'assistant' });

    if (aiResponse.includes('تم استلام طلبك') || aiResponse.includes('received')) {
      await googleSheetsService.logOrderToSheet({ ...session.order, phoneNumber: userId });
      sessionService.resetOrder(userId);
    }

    await sendWhatsAppMessage(userId, aiResponse);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error:', error.message);
    res.sendStatus(500);
  }
};

const sendWhatsAppMessage = async (to, text) => {
  const url = `https://graph.facebook.com/${config.whatsapp.apiVersion}/${config.whatsapp.phoneNumberId}/messages`;
  await axios.post(url, {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: { body: text }
  }, {
    headers: { 'Authorization': `Bearer ${config.whatsapp.accessToken}` }
  });
};

module.exports = { verifyWebhook, handleIncomingMessage };
