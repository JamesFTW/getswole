
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

const title = text => {
  return text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

}

module.exports = {
 dayOfWeek,
 title 
}