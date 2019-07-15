
const {
  REGISTER_USERWORKOUT_PLAN,
  FIND_USERWORKOUT_PLANID,
  FIND_USERWORKOUT_PLAN,
  GET_USER,
  GET_TODAYS_WORKOUT,
  GET_TODAYS_EXERCISE,
  GET_EXERCISE_IDS
} = require('./queries')

const { dayOfWeek, allEqual, stringify } = require('../../util/')

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

        resolve(workoutPlan)
      } catch(err) {
        reject(err)
      }
    })
  })
}

const getTodaysWorkout = db => twitterid => {
  return new Promise((resolve, reject) => {
    db.task(async t => {
      try {
        const userid = await t.one(GET_USER, twitterid)
        const planid = await t.oneOrNone(FIND_USERWORKOUT_PLANID, userid.userid)

        if (planid === null) {
          const res = stringify({ planid: null })
          resolve(res)
        }

        const workoutPlan = await t.oneOrNone(FIND_USERWORKOUT_PLAN, planid.planid)
        const workoutIds = workoutPlan.workoutids
        const queries = []
        const today = dayOfWeek(new Date())

        //the times for today is not correct
        workoutIds.map(workoutId => {
          queries.push(t.oneOrNone(GET_TODAYS_WORKOUT, [workoutId, 'Thursday']))
        })

        const workouts = await t.batch(queries)
        
        if (allEqual(workouts)) {
          const res = stringify({ 'restDay': true })
          return resolve(res)
        }

        let workoutId = ''
        let todaysWorkout = ''

        workouts.map(ids => {
          if (ids !== null)  {
            todaysWorkout = ids
            workoutId = ids.workoutid
          }
        })

        const workoutExercises = await t.any(GET_EXERCISE_IDS, workoutId)
        const setsAndReps = []
        const workoutQueries = []

        workoutExercises.map(workout => {
          let gains = {}
          gains['sets'] = workout.sets
          gains['reps'] = workout.reps

          workoutQueries.push(t.one(GET_TODAYS_EXERCISE, workout.exerciseid))
          setsAndReps.push(gains)
        })

        const exercises = await t.batch(workoutQueries)
        const userExercises = []
        const res = {}

        res['workout']     = todaysWorkout.workoutname
        res['workoutType'] = todaysWorkout.workouttype
        res['dayofWeek']   = todaysWorkout.dayofweek
        res['exercises']   = userExercises

        for(var i = 0; i < exercises.length; i++) {
          const exercise = exercises[i]
          const sets = setsAndReps[i]
          userExercises.push({...exercise, ...sets})
        }

        const data = stringify(res)
        resolve(data)

      } catch(err) {
        reject(err)
      }
    })
  })
}

const userWorkoutPlanInit = db => ({
  create: createUserPlan(db),
  findPlanUserid: findUserPlan(db),
  findWorkout: getTodaysWorkout(db)
})

module.exports = userWorkoutPlanInit