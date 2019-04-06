const express = require('express')
const router = express.Router()
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn()

router.get(':user', isLoggedIn, (req, res) => {
  const { user } = req.params

  res.send({ user: user })
})

module.exports = router