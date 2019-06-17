
let API_ENDPOINT = ''

if (process.env.NODE_ENV === 'development') {
  API_ENDPOINT = 'http://192.168.1.172:3000/api'
} else {
  API_ENDPOINT = 'https://swole.herokuapp.com/api'
}

module.exports = { API_ENDPOINT }