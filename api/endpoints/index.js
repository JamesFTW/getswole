
const express = require('express')
const router  = express.Router()

const login   = require('./login')
const workout = require('./workout')
const user    = require('./user')
const userworkoutplan = require('./userWorkout')

router.use('/login', login)
router.use('/workout', workout)
router.use('/user', user)
router.use('/userworkoutplan', userworkoutplan)

module.exports = router
