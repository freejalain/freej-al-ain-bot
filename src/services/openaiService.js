const axios = require('axios');
const config = require('../config');
const restaurantData = require('../utils/restaurantData');

const getAIResponse = async (userMessage, session) => {
  const menuText = JSON.stringify(restaurantData.menu);
  const systemPrompt = `أنت مساعد مطعم فريج العين الشعبي.
اللهجة: إماراتية ودية.
المنيو: ${menuText}
قواعد:
- اسأل عن الطلب والكمية والموقع وطريقة الدفع
- عند اكتمال الطلب قل "تم استلام طلبك"
- اقترح إضافات بشكل لطيف
الطلب الحالي: ${JSON.stringify(session.order)}`;

  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: config.openai.model,
    messages: [
      { role: 'system', content: systemPrompt },
      ...session.history,
      { role: 'user', content: userMessage }
    ]
  }, {
    headers: { 'Authorization': `Bearer ${config.openai.apiKey}` }
  });
  return response.data.choices[0].message.content;
};

module.exports = { getAIResponse };
