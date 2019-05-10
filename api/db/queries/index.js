const GET_USER = 
  `SELECT userid, username, profilephoto FROM users WHERE twitterid=$1`
//Eventually change this query to only send stuff I need to render on frontend
const CREATE_USER = 
  `INSERT INTO users(username, profilePhoto, twitterid) VALUES($1, $2, $3) RETURNING *`

const REGISTER_USERWORKOUT_PLAN =
  `INSERT INTO userworkoutplans(userid, planid, createdat, endat) VALUES($1, $2, $3, $4)`

  module.exports = {
    GET_USER,
    CREATE_USER,
    REGISTER_USERWORKOUT_PLAN
  }