//Goals for tomorrow
  /*
  Figure out swole architecture
   - How will I handle state (most likely Redux)
   - How will the server/routes work
   - Implement either Redux or router stuff

  */
// require dependencies
const express = require('express')
const pg      = require('pg')
const pgp     = require("pg-promise")()
const db      = pgp("postgres://jmielasaempfsp:AZuvrWoc7raoWE2Lms8F55y8-U@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d10iqa2fo5qdgp")
const helmet  = require('helmet')

// init server
const app  = express()
const port = process.env.PORT || 3000

app.use(helmet())
pg.defaults.ssl = true

app.get('/', function (req, res) {
  res.send('Hello World! \n' + process.env.DATABASE_URL)
})

app.get('/db', function(req, res){
  db.any("SELECT * FROM exercise")
    .then(function (data) {
        console.log(data)
        res.send(JSON.stringify(data))
    })
    .catch(function (error) {
        console.log("ERROR:", error)
    })
})
app.get('/users', (req, res) => {
  db.any("SELECT * FROM _user")
    .then(data => {
      console.log(JSON.stringify(data))
      res.send(JSON.stringify(data))
    })
    .catch(error => console.log("ERROR:", error))
  })

app.get('/users/:user_id', (req, res) => {
  db.any("SELECT * FROM _user")
    .then(data => {
      for(let value of data){
        if(value.userid == req.params.user_id){
          res.send(JSON.stringify(value))
        }
        //figure out how to throw 404 if no id's match
      }
    })
    .catch(error => console.log("ERROR:", error))
  })

app.get('/tester', (req,res) => {
  db.any("SELECT * FROM _user2")
    .then(data => {
      for(let value of data)
        res.send(JSON.stringify(value.workoutscompleted))
    })
    .catch(error => console.log("Error:", error))
})
app.get('/plan/id', function(req, res){
  db.any("select * from plan where planid='0cd96b6a-f4b8-4780-8d63-8803082361f9'")
    .then(function(data){
      console.log(JSON.stringify(data))
      res.send(JSON.stringify(data))
      //res.json(data)
    })
    .catch(function(error){
      console.log("Error: ", error)
    })
  })

app.listen(port, function () {
  console.log("Express server listening on port: " + port)
})
