
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express           = require('express')
const sessionMiddleware = require('../config/session.js')
const helmet            = require('helmet')
const endpoints         = require('./endpoints')
const { passport }      = require('./auth/passport.js')
const app               = express()
const port              = process.env.PORT || 3000

app.use(helmet())
app.use(sessionMiddleware)
app.use(passport.initialize())
app.use(passport.session())
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use('/api', endpoints)


app.listen(port, '127.0.0.1', () => console.log(`listening on ${port}`))
