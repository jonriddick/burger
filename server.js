// Boilerplate code 2-35
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

//Needs password
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
  
});


// Get the api for all the burgers
app.get("/api/burgers", function(req, res) {
  
});


// Update a burger
app.put("/burgers", function(req, res) {

});


// Create a burger
app.post("/burgers", function(req, res) {
  
});



app.listen(port, function() {
  console.log("Listening on PORT " + port);
});