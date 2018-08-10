var express = require("express");
var app = express();

app.use(express.static("public"));


// var methodOverride = require("method-override"); was goning to use this to delete the burgers, but did not get around to it

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.PORT || 3000; // set for heroku



var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");


app.use("/", routes);// home page
app.listen(port, function () {
    console.log("App listening on PORT " + port);
  });
