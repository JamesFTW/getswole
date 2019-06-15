
const {
  REGISTER_USERWORKOUT_PLAN,
  FIND_USERWORKOUT_PLAN
} = require('./queries')

const createUserPlan = db => (userId, planId, startDate, endDate) =>
  db.none(REGISTER_USERWORKOUT_PLAN, [userId, planId, startDate, endDate])

const findUserPlan = db => userid => (
  db.any(FIND_USERWORKOUT_PLAN, userid)
)

const userWorkoutPlanInit = db => ({
  create: createUserPlan(db),
  findByUserid: findUserPlan(db)
})

module.exports = userWorkoutPlanInit