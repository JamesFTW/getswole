
const express = require('express')
const router  = express.Router()

const login   = require('./login')
const workout = require('./workout')

router.use('/login', login)
router.use('/workout', workout)

module.exports = router
