
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login/failed')
const { authenticate } = require('../auth/passport.js')
const express = require('express')
const router  = express.Router()

const { User } = require('../db')

router.get('/twitter', authenticate)
router.get('/oauth/callback', authenticate)

router.get('/success', isLoggedIn, (req, res) => {
  const { id } = req.session.passport.user
  console.log(id)
  User.findById(id)
    .then(data => console.log(data))
    .catch(err => console.log(err))
  //here is where I will make request to see if user exist on swole
  // res.sendStatus(200).end()
})

router.get('/failed', (req, res) => {
  res.sendStatus(401).end()
})

module.exports = router
