const { google } = require('googleapis');
const config = require('../config');

const auth = new google.auth.JWT(
  config.googleSheets.clientEmail,
  null,
  config.googleSheets.privateKey,
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: 'v4', auth });

const logOrderToSheet = async (order) => {
  const values = [[
    new Date().toLocaleString('ar-AE'),
    order.phoneNumber,
    JSON.stringify(order.items),
    order.quantity || '',
    order.location || '',
    order.paymentMethod || '',
    order.notes || ''
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.googleSheets.spreadsheetId,
    range: config.googleSheets.range,
    valueInputOption: 'USER_ENTERED',
    resource: { values }
  });
};

module.exports = { logOrderToSheet };
