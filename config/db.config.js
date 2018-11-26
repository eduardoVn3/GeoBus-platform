'use strict'
import env from './env'
import Sequelize from 'sequelize'

const SEQUELIZE = new Sequelize(
	env.database, 
	env.username, 
	env.password, 
	{
	  // logging:false,
	  host: env.host,
	  dialect: env.dialect,
	  operatorsAliases: false,

	  pool: {
	    max: env.max,
	    min: env.pool.min,
	    acquire: env.pool.acquire,
	    idle: env.pool.idle
	},
	  dialectOptions: {
	      charset: 'utf8mb4',
	      collate: 'utf8mb4_general_ci'
	    },
});

const DB = {};

DB.Sequelize = Sequelize;
DB.SEQUELIZE = SEQUELIZE;

//Models/tables
DB.Rol = require('../models/rol.js')(SEQUELIZE,Sequelize);

export default DB