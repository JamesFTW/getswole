const express = require('express')
const isAuthenticated = require('../auth/passport.js')
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn()
const router = express.Router()

router.get('/:user', isLoggedIn, (req, res) => {
  /****************************************
  Doesn't seem like I am doing auth correctly 
  Anyone can gain access to my network if they have the persons
  twitter id
  ******************************************/
  try {
    res.status(200).end()
  } catch (err) {
    res.status(403).end()
  }
})

router.get('/test', isAuthenticated, (req, res) => {
  console.log('route ran')
  res.send(req)
})

module.exports = router