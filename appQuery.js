var express = require('express');
var mysql = require('mysql');
var app = express();

//queries a database, results depend on the route
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'students'
});

connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }

  console.log("Connected as id: %s", connection.threadId)
})


var PORT = process.env.NODE_ENV || 8090;

app.get('/', function(req, res) {
  connection.query("SELECT * FROM list;", function(err, result) {
    res.send(result);
  });  
});

app.get('/cast', function(req, res) {
  connection.query("SELECT name FROM list ORDER BY id", function(err, result) {
    res.send(result);
  });
});

app.get('/coolness-chart', function(req, res) {
  connection.query("SELECT name, coolness_points FROM list ORDER BY coolness_points DESC", function(err, result) {
    res.send(result);
  });
});

app.get('/attitude-chart/:type', function(req, res) {
  var type = req.params.type;
  connection.query("SELECT name, attitude FROM list WHERE attitude=?", [type], function(err, result) {
    res.send(result);
  });
});

//connection.end();

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});