export const GET_USER = 
  `SELECT userid, username, profilephoto FROM users WHERE twitterid=$1`

export const CREATE_USER = 
  `INSERT into users (username, profilePhoto) VALUES ($1, $2) RETURNING userid`