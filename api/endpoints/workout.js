
const express = require('express')
const router  = express.Router()
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login/failed')

const { Workout: { getAllWorkouts } } = require('../db')

router.get('/', (req, res) => {
  getAllWorkouts
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.get('/test', isLoggedIn, (req, res) => {
  const { session, cookies } = req
  const result = { session, cookies }

  console.log(req)

  res.send(result)
})


module.exports = router