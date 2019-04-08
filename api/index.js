
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express           = require('express')
const cookieParser      = require('cookie-parser')()
const bodyParser        = require('body-parser')
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
app.use(cookieParser)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use('/api', endpoints)

app.listen(port, () => console.log(`listening on ${port}`))
