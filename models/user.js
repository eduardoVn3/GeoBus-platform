'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    nickName: {
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
    password: {
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
    birthdate: {
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
      }
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};