'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransportUnit = sequelize.define('TransportUnit', {
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    numberUnit: {
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    licensePlate: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        },
        isNumeric:{
          args:true,
          msg:'Error el campo debe ser un numero'
        }
      }    
    },
    company_id: {
      type:DataTypes.UUID
    }
  }, {});
  TransportUnit.associate = function(models) {
    // associations can be defined here
  };
  return TransportUnit;
};