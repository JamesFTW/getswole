
const pgp = require('pg-promise')()
const connection = `${process.env.DATABASE_URL}?ssl=true`
const db = pgp(connection)

const userInit    = require('./user.js')
const workoutInit = require('./workout.js')
const userWorkoutInit = require('./userWorkout.js')

module.exports = { 
  connection,
  User: userInit(db),
  Workout: workoutInit(db),
  UserWorkoutPlan: userWorkoutInit(db)
}
