var express = require('express')
var app = express()
var PORT = process.env.PORT || 8090;

//calculates a value depending on the path
app.get('/:operator/:val1/:val2', function (req, res) {
  //res.send('Hello World')
  if (req.params.operator === "addition") {
    var x = parseInt(req.params.val1);
    var y = parseInt(req.params.val2);
    var result = x + y;
    result = result.toString();
      res.send(result);
      console.log(result);
  } else if (req.params.operator === "subtraction") {
    var x = parseInt(req.params.val1);
    var y = parseInt(req.params.val2);
    var result = x - y;
    result = result.toString();
      res.send(result);
      console.log(result);
  } else if (req.params.operator === "division") {
    var x = parseInt(req.params.val1);
    var y = parseInt(req.params.val2);
    var result = x / y;
    result = result.toString();
      res.send(result);
      console.log(result);
  } else if (req.params.operator === "multiplication") {
    var x = parseInt(req.params.val1);
    var y = parseInt(req.params.val2);
    var result = x * y;
    result = result.toString();
      res.send(result);
      console.log(result);
  }

});
 



app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});