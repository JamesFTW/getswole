const GET_USER = 
  `SELECT userid, username, profilephoto FROM users WHERE twitterid=$1`
//Eventually change this query to only send stuff I need to render on frontend
const CREATE_USER = 
  `INSERT INTO users(username, profilePhoto, twitterid) VALUES($1, $2, $3) RETURNING *`

const GET_USERID_SUBQUERY = id =>
  `(SELECT userid FROM users WHERE userid=${id})`

const GET_PLANID_SUBQUERY = id =>
  `(SELECT planid FROM workoutplans WHERE planid=${id})`

const REGISTER_USERWORKOUT_PLAN =
  `INSERT INTO userworkoutplans(userid, planid, createdat, endat)
  VALUES(${GET_USERID_SUBQUERY('$1')}, ${GET_PLANID_SUBQUERY('$2')}, $3, $4)`

const FIND_USERWORKOUT_PLANID =
  `SELECT planid FROM userworkoutplans WHERE userid=$1`

const FIND_USERWORKOUT_PLAN =
  `SELECT * FROM workoutplans WHERE planid=$1`

const GET_TODAYS_WORKOUT =
  `SELECT * FROM workouts WHERE workoutid=$1 AND dayofWeek=$2`

const GET_TODAYS_EXERCISE =
  `SELECT * FROM exercises WHERE exerciseid=$1`

const GET_EXERCISE_IDS =
  `SELECT exerciseid, sets,reps FROM workoutexercises WHERE workoutid=$1`



module.exports = {
  GET_USER,
  CREATE_USER,
  REGISTER_USERWORKOUT_PLAN,
  FIND_USERWORKOUT_PLANID,
  FIND_USERWORKOUT_PLAN,
  GET_TODAYS_WORKOUT,
  GET_TODAYS_EXERCISE,
  GET_EXERCISE_IDS
}