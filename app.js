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
 

 app.get('/:flavor', function (req, res) {
    var flavor = req.params.flavor;
    console.log(flavor);
    for (var i = 0; i < icecreams.length; i++){
      if (flavor === icecreams[i].name) {
        res.render('home');
      }
    }
});

  

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});