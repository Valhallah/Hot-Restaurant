var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");
var PORT = 8090;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on http://localhost:%s", PORT);
});

function handleRequest(req, res) {
  var urlParts = url.parse(req.url);
  switch (urlParts.pathname) {
    case "/":
      fs.readFile("../index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/tables":
      fs.readFile("../tables.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/reserver":
      fs.readFile("../reserve.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
  };
}

// var app = express();

// // use ajax to display tables on .../tables
// $.ajax({
//   url: queryURL,
//   method: 'GET'
// }).done(function(response) {
//   console.log(response);
// });



// app.get("/api/tables", function(req, res) {
//   // post new table in json
// });

// app.get("")