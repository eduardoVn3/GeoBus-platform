'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drivers_transportUnit = sequelize.define('Drivers_transportUnit', {
    driver_id: {
    	type:DataTypes.UUID,
    	validate:{
	        notEmpty:{
	          args:true,
	          msg:'Error el campo no puede quedar vacio'
	        }
      }
  },
    transportUnit_id: {
    	type:DataTypes.UUID,
    	validate:{
	        notEmpty:{
	          args:true,
	          msg:'Error el campo no puede quedar vacio'
	        }
      }
  	}
  }, {});
  Drivers_transportUnit.associate = function(models) {
    // associations can be defined here
  };
  return Drivers_transportUnit;
};