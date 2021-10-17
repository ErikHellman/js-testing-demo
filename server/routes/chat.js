var express = require('express');
var router = express.Router();

const messages = [];

router.get('/', (req, res, next) => {
  res.json(messages);
});

router.post('/', (req, res, next) => {
  const message = req.body
  messages.push(message)
  res.json(messages)
})

module.exports = router;
