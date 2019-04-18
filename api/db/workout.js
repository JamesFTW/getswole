
const getAllWorkouts = db =>
  db.one(`SELECT * FROM workoutplans`)

const createUser = db => (username, profilePhoto) =>
  's'

const getUserWorkouts = db => id =>
  's'

const workoutInit = db => ({
  getAllWorkouts: getAllWorkouts(db),
  createUser: createUser(db),
  getUserWorkouts: getUserWorkouts(db)
})

module.exports = workoutInit
