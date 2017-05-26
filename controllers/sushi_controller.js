var express = require("express");
var router = express.Router();
var sushi = require("../models/sushi.js");

//to show all sushi from db on index.handlebars
router.get("/", function(req, res) {
	sushi.selectAll(function(data){
		var sushiObject = {
			sushis : data
		};
		res.render("index", sushiObject);
	});
});

//to add new sushi to db then show new all sushi with redirect to get
router.post("/", function(req, res) {
	sushi.insertOne(req.body.order, function(){
		res.redirect("/");
	});
});

//to update a sushi to grabbed then show updated results from db with redirect to get
router.put("/:id", function(req, res) {
	sushi.updateOne(req.body.devoured,req.params.id, function() {
		res.redirect("/");
	});
});

//export router with sushi routes
module.exports = router;