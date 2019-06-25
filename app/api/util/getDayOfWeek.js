
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const dayOfWeek = timeStamp => {
  const workoutDate = new Date(timeStamp)
  const dayOfWeek = workoutDate.getUTCDay()

  return days[dayOfWeek]
}

module.exports = dayOfWeek