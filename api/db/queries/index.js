const GET_USER = 
  `SELECT userid, username, profilephoto FROM users WHERE twitterid=$1`

const CREATE_USER = 
  `INSERT into users (username, profilePhoto) VALUES ($1, $2) RETURNING userid`

  module.exports = {
    GET_USER,
    CREATE_USER
  }