
// require dependencies
const express = require('express')
const pg      = require('pg')
const pgp     = require("pg-promise")()
const db      = pgp("postgres://jmielasaempfsp:AZuvrWoc7raoWE2Lms8F55y8-U@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d10iqa2fo5qdgp")

// init server
const app  = express()
const port = process.env.PORT || 3000
pg.defaults.ssl = true;

app.get('/', function (req, res) {
  res.send('Hello World! \n' + process.env.DATABASE_URL)
})

app.get('/db', function(req, res){
  db.any("SELECT * FROM exercise")
    .then(function (data) {
        console.log(data);
        res.send(JSON.stringify(data))
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
})

app.get('/plan', function(req, res){
  db.any("SELECT * FROM _user")
    .then(function (data) {
        console.log(JSON.stringify(data[0]));
        res.send(JSON.stringify(data[0]))
    })
    .catch(function (error){
        console.log("ERROR:", error);
    });
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
