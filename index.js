var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('Halo Worlds');
})

var server = app.listen(5555, function () {
   console.log("server running at port 5555")
});