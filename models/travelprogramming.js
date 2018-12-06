'use strict';
module.exports = (sequelize, DataTypes) => {
  const TravelProgramming = sequelize.define('TravelProgramming', {
    name: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    description: {
      type:DataTypes.STRING,
      validate:{
         // notEmpty:{
         //   args:true,
         //   msg:'Error el campo no puede quedar vacio'
         // }
      }
    },
    initialLatitude: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    initialLength: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    finalLatitude: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    finalLength: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    departureTime: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    checkIn: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    exitAlertTime: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    nearestStation: {
      type:DataTypes.STRING,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    user_id: {
      type:DataTypes.UUID,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    outputCoordinate_id: {
      type:DataTypes.UUID,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    arrivalCoordinate_id: {
      type:DataTypes.UUID,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    },
    nearestStationCoordinate_id: {
      type:DataTypes.UUID,
      validate:{
         notEmpty:{
           args:true,
           msg:'Error el campo no puede quedar vacio'
         }
      }
    }
  }, {});
  TravelProgramming.associate = function(models) {
    // associations can be defined here
  };
  return TravelProgramming;
};