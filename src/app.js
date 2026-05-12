const express = require('express');
const whatsappRoutes = require('./routes/whatsappRoutes');

const app = express();
app.use(express.json());
app.use('/whatsapp', whatsappRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', restaurant: 'Freej Al Ain' });
});

module.exports = app;
