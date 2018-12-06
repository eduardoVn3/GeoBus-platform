'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeFavoritePlace = sequelize.define('TypeFavoritePlace', {
    name: {
    	type:DataTypes.STRING,
    	validate:{
	       notEmpty:{
	         args:true,
	         msg:'Error el campo no puede quedar vacio'
	       }
      }
    },
  }, {});
  TypeFavoritePlace.associate = function(models) {
    // associations can be defined here
  };
  return TypeFavoritePlace;
};