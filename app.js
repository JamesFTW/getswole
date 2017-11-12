//Goals for today
//**** Get hello world hosted on heroku****///
//**** Figure out what's wrong with that ssl error***//


// require dependencies
var express = require('express')
var pg = require('pg')
var pgp = require("pg-promise")()
var db = pgp("postgres://jmielasaempfsp:AZuvrWoc7raoWE2Lms8F55y8-U@ec2-54-243-249-176.compute-1.amazonaws.com:5432/d10iqa2fo5qdgp")

// init server
var app = express()
var port = process.env.PORT || 3000

//app.set('view engine', 'pug')


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
  db.any("SELECT * FROM plan")
    .then(function (data) {
        console.log(data);
        res.send(JSON.stringify(data))
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
})

app.get('/plan/id', function(req, res){
  db.any("SELECT * FROM workout")
    .then(function(data){
      console.log(data)
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



/*** Was able to get everything to work using pg-promise***/

// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function (err, client, done) {
//       if (err) {
//       console.log(err)
//       return response.send("Error " + err)
//     }
//
//     client.query('SELECT * FROM test_table', function (err, result) {
//       done()
//       if (err) {
//         console.error(err)
//         response.send("Error " + err)
//       } else {
//         console.log(result.rows)
//         response.send(JSON.stringify(result.row))
//       }
//     })
//   })
// })
