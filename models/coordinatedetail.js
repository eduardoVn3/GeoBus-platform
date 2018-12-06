'use strict';
module.exports = (sequelize, DataTypes) => {
  const CoordinateDetail = sequelize.define('CoordinateDetail', {
    name: {
      type:DataTypes.STRING,
      validate:{
          notEmpty:{
            args:true,
            msg:'Error el campo no puede quedar vacio'
          }
      }
    },
    addressOne: {
      type:DataTypes.STRING,
      validate:{
          notEmpty:{
            args:true,
            msg:'Error el campo no puede quedar vacio'
          }
      }
    },
    addressTwo: {
      type:DataTypes.STRING,
      validate:{
          notEmpty:{
            args:true,
            msg:'Error el campo no puede quedar vacio'
          }
      }
    },
    addressThree: {
      type:DataTypes.STRING,
      validate:{
          notEmpty:{
            args:true,
            msg:'Error el campo no puede quedar vacio'
          }
      }
    },
    image: {
      type:DataTypes.STRING,
      validate:{
          notEmpty:{
            args:true,
            msg:'Error el campo no puede quedar vacio'
          }
      }
    },
    coordinate_id: {
      type:DataTypes.UUID,
      validate:{
          notEmpty:{
            args:true,
            msg:'Error el campo no puede quedar vacio'
          }
      }
    },
  }, {});
  CoordinateDetail.associate = function(models) {
    // associations can be defined here
  };
  return CoordinateDetail;
};