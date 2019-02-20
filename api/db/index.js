
const pgp = require('pg-promise')()
const connection = `${process.env.DATABASE_URL}?ssl=true`
const db = pgp(connection)

module.exports = { db, connection }
