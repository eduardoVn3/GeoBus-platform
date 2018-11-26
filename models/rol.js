'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    name: {
    	type: DataTypes.STRING,
    	validate:{
    		notEmpty:{
    			args:true,
    			msg:'error no puede quedar vacio'
    		},
    		len:{
    			args:[1,10],
    			msg:'debe ser mayor a 1 y menor a 10'
    		}
    	}
    }
  }, {});
  Rol.associate = function(models) {
    // associations can be defined here
  };
  return Rol;
};