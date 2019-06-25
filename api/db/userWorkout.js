
const {
  REGISTER_USERWORKOUT_PLAN,
  FIND_USERWORKOUT_PLANID,
  FIND_USERWORKOUT_PLAN,
  GET_USER
} = require('./queries')

const createUserPlan = db => (userId, planId, startDate, endDate) =>
  db.none(REGISTER_USERWORKOUT_PLAN, [userId, planId, startDate, endDate])

const findUserPlan = db => twitterid => {
  return new Promise((resolve, reject) => {
    db.task(async t => {
      try {
        const userid = await t.one(GET_USER, twitterid)
        const planid = await t.one(FIND_USERWORKOUT_PLANID, userid.userid)
        const workoutPlan = await t.one(FIND_USERWORKOUT_PLAN, planid.planid)
        /**
         * planid eventually will have multiple plans and I will have to
         * return the latest one
         */

        return resolve(workoutPlan)
      } catch(err) {
        reject(err)
      }
    })
  })
}

const userWorkoutPlanInit = db => ({
  create: createUserPlan(db),
  findByUserid: findUserPlan(db)
})

module.exports = userWorkoutPlanInit