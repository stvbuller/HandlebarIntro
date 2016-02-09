var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();



var PORT = process.env.NODE_ENV || 8090;


var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3},
 {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1}, 
  {name: 'greentea', price: 5, awesomeness: 7}, 
  {name: 'jawbreakers', price: 6, awesomeness: 2}, ]; 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

 app.get('/vanilla', function (req, res) {

    res.render('iceCream', data);
});

// app.get('/vanilla', function (req, res) {
//     res.render('home');
// });

// app.get('/chocolate', function (req, res) {
//     res.render('home');
// });

// app.get('/banana', function (req, res) {
//     res.render('home');
// });
  
// app.get('/greentea', function (req, res) {
//     res.render('home');
// });

// app.get('/jawbreakers', function (req, res) {
//     res.render('home');
// });
  

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});