'use strict'
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http'

import router from './routes/index';
import db from './config/db.config.js';
const APP = express();
const SERVER = http.Server(APP);

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json({limit: '10mb'}));

APP.use('/', router);

APP.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

db.SEQUELIZE.sync({
	force: true
}).then(()=>{
	console.log('Drop and Resync with { force: true }');
}).catch(err=>{
	console.log(err);
})

APP.listen(PORT,HOST,()=>{
		console.log('Server corriendo en',HOST,':',PORT);
	});