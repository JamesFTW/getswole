
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn()
const { authenticate } = require('../auth/passport.js')
const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World! \n')
})

router.get('/failed', (req, res) => {
  res.send('Failed! \n')
})

router.get('/success', (req, res) => {
  res.send('Logged in! \n')
})

router.get('/twitter', authenticate)

router.get('/oauth/callback', authenticate, (req, res) => {
  res.redirect('/')
})

router.get('/profile', isLoggedIn, (req, res) => {
  const user = req.user

  res.redirect(`/api/user/${user}`)
})

module.exports = router
