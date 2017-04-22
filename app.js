var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");
var PORT = 8090;

var app = express();

var tables = [
  {
    name: "Matt",
    phoneNumber: "1234567890",
    email: "test@gmail.com",
    id: "matt"
  },
  {
    name: "Val",
    phoneNumber: "12454645645",
    email: "asdf@gmail.com",
    id: "val"
  },
  {
    name: "Val",
    phoneNumber: "12454645645",
    email: "asdf@gmail.com",
    id: "val"
  }
];

app.listen(PORT, function() {
  console.log("Server listening on http://localhost:%s", PORT);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  console.log(tables.length);
    return res.json(tables);
});