const GET_USER = 
  `SELECT userid, username, profilephoto FROM users WHERE twitterid=$1`

const CREATE_USER = 
  `INSERT INTO users(username, profilePhoto, twitterid) VALUES($1, $2, $3) RETURNING userid`

  module.exports = {
    GET_USER,
    CREATE_USER
  }