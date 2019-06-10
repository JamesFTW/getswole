
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login/failed')
const { authenticate } = require('../auth/passport.js')
const express = require('express')
const router  = express.Router()

const { User } = require('../db')

router.get('/twitter', authenticate)
router.get('/oauth/callback', authenticate)

router.get('/success', isLoggedIn, (req, res) => {
  const { id } = req.session.passport.user

  User.findById(id)
    .then(_ => res.redirect('/api/login/workoutscreen'))
    .catch(_ => res.redirect('/api/login/onboardingscreen'))
})

router.get('/workoutscreen', (req, res) => {
  res.sendStatus(200).end()
})

router.get('/onboardingscreen', (req, res) => {
  res.sendStatus(200).end()
})

router.get('/failed', (req, res) => {
  res.sendStatus(401).end()
})

module.exports = router
