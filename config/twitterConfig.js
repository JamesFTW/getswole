
const twitterConfig = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_SECRET_KEY,
  callbackURL: "https://swole.herokuapp.com/api/login/oauth/callback"
}

module.exports = twitterConfig
