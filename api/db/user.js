
const {
  GET_USER,
  CREATE_USER,
  REGISTER_USERWORKOUT_PLAN
} = require('./queries')

const findById = db => twitterid =>
  db.one(GET_USER, twitterid)

const createUser = db => (username, profilePhoto, twitterid) =>
  db.one(CREATE_USER, [username, profilePhoto, twitterid])

const createUserPlan = db => (userId, planId, startDate, endDate) => {
  db.one(REGISTER_USERWORKOUT_PLAN, userId, planId, startDate, endDate)
}

const getUserWorkouts = db => id =>
  'too be added'

const userInit = db => ({
  findById: findById(db),
  create: createUser(db),
  getWorkouts: getUserWorkouts(db),
  createWorkoutPlan: createUserPlan(db)
})

module.exports = userInit