'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    lastName: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    cuil: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    dni: {
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
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};