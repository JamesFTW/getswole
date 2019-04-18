
const { GET_USER, CREATE_USER } = require('./queries')

const findById = db => twitterid =>
  db.one(GET_USER, twitterid)

const createUser = db => (username, profilePhoto) =>
  db.one(CREATE_USER, [username, profilePhoto])

const getUserWorkouts = db => id =>
  'too be added'

const userInit = db => ({
  findById: findById(db),
  create: createUser(db),
  getWorkouts: getUserWorkouts(db)
})

module.exports = userInit