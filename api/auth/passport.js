
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const twitterConfig = require('../../config/twitterConfig.js')

passport.use(new Strategy(twitterConfig,
  (token, tokenSecret, profile, cb) => {
    //make a select statement to see if person is valid, it not
    //create an account
    cb(null, profile)
}))

passport.serializeUser((user, cb) => {
  const profilePhoto = user._json.profile_image_url_https
  const origSizeImage = profilePhoto.replace('_normal', '')

  const userObject = {
    id: user.id,
    profilePhoto: origSizeImage
  }

  cb(null, userObject)
})

//Need to create user here
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
