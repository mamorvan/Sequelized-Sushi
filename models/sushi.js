module.exports = function(sequelize, DataTypes){
	var Sushi = sequelize.define("Sushi", {
		sushi_name: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true,
				is: /^[a-zA-Z\s]*$/
			}

		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return Sushi;
};
