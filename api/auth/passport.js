
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const twitterConfig = require('../../config/twitterConfig.js')

passport.use(new Strategy(twitterConfig,
  (token, tokenSecret, profile, cb) => {
    console.log(profile)
}))

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})

const authSettings = {
  successRedirect: '/',
  failureRedirect: '/login'
}

module.exports = {
  passport,
  authenticate: passport.authenticate('twitter', authSettings)
}
