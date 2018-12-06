'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoritePlace = sequelize.define('FavoritePlace', {
    name: {
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
    user_id: {
      type:DataTypes.UUID,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    type_place: {
      type:DataTypes.UUID,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
    detailCoordinate_id: {
      type:DataTypes.UUID,
      validate:{
        notEmpty:{
          args:true,
          msg:'Error el campo no puede quedar vacio'
        }
      }
    },
  }, {});
  FavoritePlace.associate = function(models) {
    // associations can be defined here
  };
  return FavoritePlace;
};