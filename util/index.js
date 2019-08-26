
const dayOfWeek = dateObject => {
  const getDay = require('date-fns/get_day')
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const dayNumber = getDay(dateObject)

  return days[dayNumber]
}

const formatDate = dateObject => {
  const format = require('date-fns/format')
  const date = format(dateObject, 'MM-DD-YYYY')

  return date
}

const isToday = dateObject => {
  const today = require('date-fns/is_today')
  return today(dateObject)
}

const stringify = data => {
  const jsesc = require("jsesc")
  const res = jsesc(data, {
    json: true,
    isScriptContext: true
  })

  return res
}

const title = text => (
  text = text.toLowerCase()
  .split(' ')
  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  .join(' ')
)

const allEqual = arr => arr.every(v => v === arr[0])
const isEmptyObj = obj => Object.entries(obj).length === 0 && obj.constructor === Object

module.exports = {
 dayOfWeek,
 title,
 allEqual,
 isEmptyObj,
 stringify,
 formatDate,
 isToday
}
