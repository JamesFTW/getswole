
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn()
const { passport, authenticate } = require('../auth/passport.js')
const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World! \n')
})

router.get('/twitter', authenticate)

router.get('/oauth/callback', authenticate, (req, res) => {
  res.redirect('/')
})

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { user: req.user })
})

module.exports = router
