'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: {
    	type: DataTypes.STRING,
    	validate:{
    		notEmpty:{
    			args:true,
    			msg:'error no puede quedar vacio'
    		}
    	}
    },
    address: {
    	type: DataTypes.STRING,
    	validate:{
    		notEmpty:{
    			args:true,
    			msg:'error no puede quedar vacio'
    		}
    	}
    },
    cuil: {
    	type: DataTypes.STRING,
    	validate:{
    		notEmpty:{
    			args:true,
    			msg:'error no puede quedar vacio'
    		}
    	}
    },
    image: {
    	type: DataTypes.STRING
    },
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};