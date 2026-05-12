const app = require('./src/app');
const config = require('./src/config');
const { clearOldSessions } = require('./src/services/sessionService');

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Freej Al Ain Bot Started on port ${PORT}`);
});

setInterval(() => {
  clearOldSessions();
}, 1800000);
