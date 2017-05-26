//create methods that will execute MySQL queries in the controllers, then export
//will need selectAll(), insertOne(), updateOne()

var connection = require("../config/connection.js");

//create orm object for needed SQL functions
var orm = {
	selectAll: function(table, callback) {
		var query = connection.query("SELECT * FROM " + table + ";", function(err, data) {
			if (err) throw err;
			callback(data);
			console.log(query.sql);
		});

	},

	insertOne: function(table, column, order, callback) {
		var query = connection.query("INSERT INTO " + table 
			+ " (" + column.toString() + ") "  
			+ "VALUES (?);"  
		, order, function(err, data) {
			if (err) throw err;
			callback(data);
			console.log(query.sql);
		});
	},

	updateOne: function(table, column, columnValue, conditionColumn, conditionValue, callback) {
		var query = connection.query("UPDATE " + table 
			+ " SET " + column + "=" + columnValue 
			+ " WHERE " + conditionColumn + "=" + conditionValue + ";"
			, function(err, data){
				if (err) throw err;
				callback(data);
				console.log(query.sql);
			});
	}
};

//export orm for models/sushi.js to use
module.exports = orm;
