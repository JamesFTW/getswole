
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login/failed')
module.exports = { isLoggedIn }