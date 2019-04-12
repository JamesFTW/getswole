
const express = require('express')
const router  = express.Router()
const isLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login/failed')

const { db } = require('../db')

router.get('/', (req, res) => {
  db.one("select * from workoutplans")
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.get('/test', isLoggedIn.ensureLoggedIn('/api/login'), (req, res) => {
  const { session, cookies } = req
  const result = { session, cookies }

  console.log(req)

  res.send(result)
})


module.exports = router