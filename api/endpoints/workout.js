
const express = require('express')
const router  = express.Router()

const { db } = require('../db')

router.get('/', (req, res) => {
  db.one("select * from workoutplans")
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.get('/test', (req, res) => {
  res.send(req)
})


module.exports = router