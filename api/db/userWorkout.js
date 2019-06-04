
const {
  REGISTER_USERWORKOUT_PLAN
} = require('./queries')

const createUserPlan = db => (userId, planId, startDate, endDate) =>
  db.none(REGISTER_USERWORKOUT_PLAN, [userId, planId, startDate, endDate])

const userWorkoutPlanInit = db => ({
  create: createUserPlan(db)
})

  module.exports = { userWorkoutPlanInit }