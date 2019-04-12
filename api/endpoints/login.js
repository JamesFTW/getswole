
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login/failed')
const { authenticate } = require('../auth/passport.js')
const express = require('express')
const router  = express.Router()

router.get('/twitter', authenticate)
router.get('/oauth/callback', authenticate)

router.get('/success', isLoggedIn, (req, res) => {
  res.send(200).end()
})

router.get('/failed', (req, res) => {
  res.send(401).end()
})

module.exports = router
