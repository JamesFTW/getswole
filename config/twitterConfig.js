
const twitterConfig = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_SECRET_KEY,
  callbackURL: "http://127.0.0.1:3000/api/login/oauth/callback"
}

module.exports = twitterConfig
