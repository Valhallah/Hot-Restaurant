var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var PORT = 8090;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

var reservations = [
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

var waitlist = [];

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
  console.log(reservations.length);
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  console.log(waitlist.length);
    return res.json(waitlist);
});

app.post("/api/tables/new", function(req, res) {
    var newReservation = req.body;
    // console.log(newReservation);
    if (reservations.length < 5) {
      reservations.push(newReservation);
      res.json(true);
    }
    else {
      waitlist.push(newReservation);
      res.json(false);
    }

});

