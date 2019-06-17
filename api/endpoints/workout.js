
const express = require('express')
const router  = express.Router()
const { isLoggedIn } = require('../auth/isAuthenticated.js')

const { Workout } = require('../db')

//Global level workout stuff
router.get('/', (req, res) => {
  Workout.getAllWorkouts()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get('/test', isLoggedIn, (req, res) => {
  const { session, cookies } = req
  const result = { session, cookies }

  console.log(req)

  res.json(result)
})


module.exports = router