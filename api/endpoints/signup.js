
const express = require('express')
const router  = express.Router()

const { db } = require('../db')

router.get('/', (req, res) => {
  res.send('Hello World! \n')
})

module.exports = router