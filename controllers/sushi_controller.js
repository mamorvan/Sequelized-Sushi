var express = require("express");
var router = express.Router();
var db = require("../models");

//to show all sushi from db on index.handlebars
router.get("/", function(req, res) {
	db.Sushi.findAll({}).then(function(data){
		res.render("index", data);
	});
});

//to add new sushi to db then show new all sushi with redirect to get
router.post("/", function(req, res) {
	db.Sushi.create({
		sushi_name: req.body.sushi_name
	}).then(function(data){
		res.json(data);
		res.redirect("/");
	});
});

//to update a sushi to grabbed then show updated results from db with redirect to get
router.put("/:id", function(req, res) {
	db.Sushi.update({
		devoured: req.body.devoured
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(data){
		res.json(data);
		res.redirect("/");
	});
});

//export router with sushi routes
module.exports = router;