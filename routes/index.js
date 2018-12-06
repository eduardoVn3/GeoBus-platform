'use strict'
import express from 'express'
import ctrl from '../controllers'
const ROUTER = express.Router();

ROUTER.get('/rol',ctrl.HomeControllers.index);
ROUTER.get('/rol/:id',ctrl.HomeControllers.show);
ROUTER.post('/rol/new',ctrl.HomeControllers.store);
ROUTER.put('/rol/update',ctrl.HomeControllers.update);
ROUTER.get('/rol/new',ctrl.HomeControllers.store);

//company
ROUTER.get('/company',ctrl.CompanyControllers.index);
ROUTER.get('/company/:id',ctrl.CompanyControllers.show);
ROUTER.post('/company/new',ctrl.CompanyControllers.store);
ROUTER.put('/company/update/:id',ctrl.CompanyControllers.update);
ROUTER.delete('/company/delete/:id',ctrl.CompanyControllers.deleted);

//transportUnit
ROUTER.get('/transportUnit',ctrl.TransportUnitControllers.index);
ROUTER.get('/transportUnit/:id',ctrl.TransportUnitControllers.show);
ROUTER.post('/transportUnit/new',ctrl.TransportUnitControllers.store);
ROUTER.put('/transportUnit/update/:id',ctrl.TransportUnitControllers.update);
ROUTER.delete('/transportUnit/delete/:id',ctrl.TransportUnitControllers.deleted);

//driver
ROUTER.get('/driver',ctrl.DriverControllers.index);
ROUTER.get('/driver/:id',ctrl.DriverControllers.show);
ROUTER.post('/driver/new',ctrl.DriverControllers.store);
ROUTER.put('/driver/update/:id',ctrl.DriverControllers.update);
ROUTER.delete('/driver/delete/:id',ctrl.DriverControllers.deleted);

//routes
ROUTER.get('/route',ctrl.RouteControllers.index);
ROUTER.get('/route/:id',ctrl.RouteControllers.show);
ROUTER.post('/route/new',ctrl.RouteControllers.store);
ROUTER.put('/route/update/:id',ctrl.RouteControllers.update);
ROUTER.delete('/route/delete/:id',ctrl.RouteControllers.deleted);


export default ROUTER;
