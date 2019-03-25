
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const twitterConfig = require('../../config/twitterConfig.js')

passport.use(new Strategy(twitterConfig,
  (token, tokenSecret, profile, cb) => {
    //make a select statement to see if person is valid, it not
    //create an account
    console.log(profile)
    cb(null, profile.id)
}))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})

const authSettings = {
  successRedirect: '/api/login/success',
  failureRedirect: '/api/login/failed'
}

module.exports = {
  passport,
  authenticate: passport.authenticate('twitter', authSettings)
}
