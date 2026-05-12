require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  whatsapp: {
    verifyToken: process.env.WHATSAPP_VERIFY_TOKEN,
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN,
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
    apiVersion: 'v17.0'
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-3.5-turbo'
  },
  googleSheets: {
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Sheet1!A:O',
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY
  }
};
