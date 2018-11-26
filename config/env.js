'use strict'
const ENV = {
  database: 'geoBus',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 100,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

export default ENV