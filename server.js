var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var expressHandlebars = require("express-handlebars");
var routes = require("./controllers/sushi_controller.js");

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname + "/public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//get from router in controller(s) file(s)
app.use("/", routes);

app.listen(port, function(){
	console.log("Ready to grab some sushi on port: " + port);
});
