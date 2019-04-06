const express = require('express')
const router = express.Router()
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn()

router.get('/:user', isLoggedIn, (req, res) => {
  const { user } = req.params

  try {
    res.status(200)
  } catch (err) {
    res.status(403).end()
  }
})

module.exports = router