
const {
  REGISTER_USERWORKOUT_PLAN,
  FIND_USERWORKOUT_PLANID,
  FIND_USERWORKOUT_PLAN,
  GET_USER,
  GET_TODAYS_WORKOUT,
  GET_TODAYS_EXERCISE,
  GET_EXERCISE_IDS
} = require('./queries')

const dayofWeek = require('../../app/api/util/getDayOfWeek.js')
const allEqual = arr => arr.every(v => v === arr[0])

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
        const planid = await t.one(FIND_USERWORKOUT_PLANID, userid.userid)
        const workoutPlan = await t.one(FIND_USERWORKOUT_PLAN, planid.planid)

        const workoutIds = workoutPlan.workoutids
        const queries = []
        const today = dayofWeek(new Date())

        workoutIds.map(workoutId => {
          queries.push(t.oneOrNone(GET_TODAYS_WORKOUT, [workoutId, today]))
        })

        const workouts = await t.batch(queries)
        
        if(allEqual(workouts)) {
          return reject('Day off')
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
        const res = {}

        res['workoutName'] = todaysWorkout.workoutname
        res['workoutType'] = todaysWorkout.workouttype
        res['dayofWeek']   = todaysWorkout.dayofweek

        const userExercises = []
        res['userExercises'] = userExercises

        for(var i = 0; i < exercises.length; i++) {
          const exercise = exercises[i]
          const sets = setsAndReps[i]
          userExercises.push({...exercise, ...sets})
        }

        resolve(res)

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