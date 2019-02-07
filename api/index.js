
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const pg      = require('pg')
const pgp     = require("pg-promise")()
const db      = pgp(process.env.DATABASE_URL)
const helmet  = require('helmet')

// init server
const app  = express()
const port = process.env.PORT || 3000
