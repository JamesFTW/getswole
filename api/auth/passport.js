
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const twitterConfig = require('../../config/twitterConfig.js')

passport.use(new Strategy(twitterConfig,
  (token, tokenSecret, profile, cb) => {
    //make a select statement to see if person is valid, it not
    //create an account
    // console.log(profile)
    console.log(token)
    console.log(tokenSecret)
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
