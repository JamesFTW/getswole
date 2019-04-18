
const findById = db => id =>
  's'

const createUser = db => (username, profilePhoto) =>
  's'

const getUserWorkouts = db => id =>
  's'

const userInit = db => ({
  findById: findById(db),
  create: createUser(db),
  getWorkouts: getUserWorkouts(db)
})

module.exports = userInit