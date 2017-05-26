module.exports = function(sequelize, DataTypes){
	var Sushi = sequelize.define("Sushi", {
		sushi_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return Sushi;
};
