module.exports = function(sequelize, DataTypes) {
	var Locations = sequelize.define('Locations', {
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		country: DataTypes.STRING
	});
	return Locations;
};