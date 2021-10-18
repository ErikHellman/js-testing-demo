const express = require('express');

const router = express.Router();

const messages = [];

router.get('/', (req, res) => {
  res.json(messages);
});

router.post('/', (req, res) => {
  const message = req.body;
  messages.push(message);
  res.json(messages);
});

module.exports = router;
