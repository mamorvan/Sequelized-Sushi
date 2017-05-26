//create code that will call the ORM function using the specific parameters for the ORM
var orm = require("../config/orm.js");

var sushi = {
	selectAll: function(callback) {
		orm.selectAll("sushi", function(data){
			callback(data);
		});
	},
	insertOne: function(order, callback) {
		orm.insertOne("sushi", "sushi_name", order, function(data){
			callback(data);
		});
	},
	updateOne: function(columnValue, id, callback) {
		orm.updateOne("sushi", "devoured", columnValue, "id", id, function(data){
			callback(data);
		});
	}
};

//export for controllers/sushi_controller.js to use 
//controller controls flow of data (from database using this sushi object's methods ) to user view (via handlebars)
module.exports = sushi;