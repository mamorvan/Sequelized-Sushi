module.exports = function(sequelize, DataTypes){
	var Sushi = sequelize.define("Sushi", {
		sushi_name: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true,
				is: /^[a-z]+$/i
			}

		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return Sushi;
};
