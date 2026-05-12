const handleError = (error, res) => {
  console.error('Error:', error.message);
  res.sendStatus(500);
};

module.exports = { handleError };
