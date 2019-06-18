
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default dayOfWeek = timeStamp => {
  const workoutDate = new Date(timeStamp)
  const dayOfWeek = workoutDate.getUTCDay()

  return days[dayOfWeek]
}
