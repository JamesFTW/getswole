const express = require('express')
const router = express.Router()
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login')

const {
  UserWorkoutPlan,
  User
} = require('../db')

//check if user has completed any workouts
//starting new userworkouts

router.post('/create', isLoggedIn, (req, res) => {
  //creation of userworkouts
  const {
    userId,
    planId,
    length,
    timeStamp
  } = req.body

  const oneWeek = 604800000
  const endDateTimeStamp = (length * oneWeek) + timeStamp

  const startDate = new Date(timeStamp)
  const endDate = new Date(endDateTimeStamp) // have to change this to 11:59pm

  UserWorkoutPlan.create(userId, planId, startDate, endDate)
    .then(_ => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.get('/find', isLoggedIn, (req, res) => {
  const { id } = req.session.passport.user

  User.findById(id)
    .then(user => {
      const { userid } = user

      console.log(userid)

      UserWorkoutPlan.findByUserid(userid)
        .then(data => {
          if(data) {
            console.log(data)
            res.sendStatus(200)
          } else {
            res.sendStatus(404)
          }
        })
    })
    .catch(err => console.log(err))
})

module.exports = router

/**
 * /userworkout/create //creates workoutplan for user
 * /userworkout/:id //returns current userworkout
 * /userworkout/edit //changes workoutplan if user already has one
 */