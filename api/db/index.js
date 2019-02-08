if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const pg  = require('pg')
const pgp = require('pg-promise')()
const connection = process.env.DATABASE_URL
const db = pgp(connection)

pg.defaults.ssl = true

module.exports = { db, s3, connection }
