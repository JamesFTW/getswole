const express = require('express')
const router = express.Router()
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login')

const { User } = require('../db')

router.get('/', isLoggedIn, (req, res) => {
  const { passport } = req.session

  res.json(passport)
})

router.post('/create', isLoggedIn, (req, res) => {
  const { username, profilePhoto } = req.body

  User.create(username, profilePhoto)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/api/signup')
})

module.exports = router