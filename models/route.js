'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    name: {
    	type:DataTypes.STRING,
    	validate:{
	        notEmpty:{
	          args:true,
	          msg:'Error el campo no puede quedar vacio'
	        }
      	}
    },
    company_id: {
    	type:DataTypes.UUID,
    	validate:{
	        notEmpty:{
	          args:true,
	          msg:'Error el campo no puede quedar vacio'
	        }
      	}
  	}
  }, {});
  Route.associate = function(models) {
    // associations can be defined here
  };
  return Route;
};