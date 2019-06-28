
const dayOfWeek = timeStamp => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const workoutDate = new Date(timeStamp)
  const dayOfWeek = workoutDate.getUTCDay()

  return days[dayOfWeek]
}

const stringify = data => {
  const jsesc = require("jsesc")
  const res = jsesc(data, {
    json: true,
    isScriptContext: true
  })

  return res
}

const title = text => {
  return text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
}

const allEqual = arr => arr.every(v => v === arr[0])
const isEmptyObj = obj => Object.entries(obj).length === 0 && obj.constructor === Object

module.exports = {
 dayOfWeek,
 title,
 allEqual,
 isEmptyObj,
 stringify
}