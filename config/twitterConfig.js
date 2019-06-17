
const { API_ENDPOINT } = require('../app/api/endpoint.js')

const twitterConfig = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_SECRET_KEY,
  callbackURL: `${API_ENDPOINT}/login/oauth/callback`
}

module.exports = twitterConfig
