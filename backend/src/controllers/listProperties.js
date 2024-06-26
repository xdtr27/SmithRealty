const express = require('express');
const router = express.Router();
const dataProps = require('../data/dataProps')

router.get('/properties', (req, res) => {
  res.send(dataProps)
})

module.exports = router;