
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const twitterConfig = require('../../config/twitterConfig.js')

passport.use(new Strategy(twitterConfig,
  (token, tokenSecret, profile, cb) => {
    //make a select statement to see if person is valid, it not
    //create an account
    console.log(profile)
    cb(null, profile)
}))

passport.serializeUser((user, cb) => {
  cb(null, user)
})

//Need to create user here
passport.deserializeUser((obj, cb) => {
  const userObject = {
    id: obj.id,
    profilePhoto: obj._json.profile_image_url_https
  }

  cb(null, userObject)
})

const authSettings = {
  successRedirect: '/api/login/success',
  failureRedirect: '/api/login/failed'
}

module.exports = {
  passport,
  authenticate: passport.authenticate('twitter', authSettings)
}
