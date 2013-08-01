var express = require('express');
var fs = require("fs");

var indexFile = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync(indexFile);
  response.send(buf.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

