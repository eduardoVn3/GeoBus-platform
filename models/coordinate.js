'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coordinate = sequelize.define('Coordinate', {
    length: {
    	type:DataTypes.STRING,
    	validate:{
	        notEmpty:{
	          args:true,
	          msg:'Error el campo no puede quedar vacio'
	        }
      }
    },
    latitude: {
    	type:DataTypes.STRING,
    	validate:{
	        notEmpty:{
	          args:true,
	          msg:'Error el campo no puede quedar vacio'
	        }
      }
    },
  }, {});
  Coordinate.associate = function(models) {
    // associations can be defined here
  };
  return Coordinate;
};