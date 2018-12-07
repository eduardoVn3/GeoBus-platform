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

//driver_transportUnit
ROUTER.get('/driverTransportUnit',ctrl.Driver_transportUnitControllers.index);
ROUTER.get('/driverTransportUnit/:id',ctrl.Driver_transportUnitControllers.show);
ROUTER.post('/driverTransportUnit/new',ctrl.Driver_transportUnitControllers.store);
ROUTER.put('/driverTransportUnit/update/:id',ctrl.Driver_transportUnitControllers.update);
ROUTER.delete('/driverTransportUnit/delete/:id',ctrl.Driver_transportUnitControllers.deleted);

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

//user
ROUTER.get('/user',ctrl.UserControllers.index);
ROUTER.get('/user/:id',ctrl.UserControllers.show);
ROUTER.post('/user/new',ctrl.UserControllers.store);
ROUTER.put('/user/update/:id',ctrl.UserControllers.update);
ROUTER.delete('/user/delete/:id',ctrl.UserControllers.deleted);

//favoritePlace
ROUTER.get('/favoritePlace',ctrl.FavoritePlaceControllers.index);
ROUTER.get('/favoritePlace/:id',ctrl.FavoritePlaceControllers.show);
ROUTER.post('/favoritePlace/new',ctrl.FavoritePlaceControllers.store);
ROUTER.put('/favoritePlace/update/:id',ctrl.FavoritePlaceControllers.update);
ROUTER.delete('/favoritePlace/delete/:id',ctrl.FavoritePlaceControllers.deleted);

//typeFavoritePlace
ROUTER.get('/typeFavoritePlace',ctrl.TypeFavoritePlaceControllers.index);
ROUTER.get('/typeFavoritePlace/:id',ctrl.TypeFavoritePlaceControllers.show);
ROUTER.post('/typeFavoritePlace/new',ctrl.TypeFavoritePlaceControllers.store);
ROUTER.put('/typeFavoritePlace/update/:id',ctrl.TypeFavoritePlaceControllers.update);
ROUTER.delete('/typeFavoritePlace/delete/:id',ctrl.TypeFavoritePlaceControllers.deleted);

//travelProgramming
ROUTER.get('/travelProgramming',ctrl.TravelProgrammingControllers.index);
ROUTER.get('/travelProgramming/:id',ctrl.TravelProgrammingControllers.show);
ROUTER.post('/travelProgramming/new',ctrl.TravelProgrammingControllers.store);
ROUTER.put('/travelProgramming/update/:id',ctrl.TravelProgrammingControllers.update);
ROUTER.delete('/travelProgramming/delete/:id',ctrl.TravelProgrammingControllers.deleted);

//coordinate
ROUTER.get('/coordinate',ctrl.CoordinateControllers.index);
ROUTER.get('/coordinate/:id',ctrl.CoordinateControllers.show);
ROUTER.post('/coordinate/new',ctrl.CoordinateControllers.store);
ROUTER.put('/coordinate/update/:id',ctrl.CoordinateControllers.update);
ROUTER.delete('/coordinate/delete/:id',ctrl.CoordinateControllers.deleted);

//coordinateDetail
ROUTER.get('/coordinateDetail',ctrl.CoordinateDetailControllers.index);
ROUTER.get('/coordinateDetail/:id',ctrl.CoordinateDetailControllers.show);
ROUTER.post('/coordinateDetail/new',ctrl.CoordinateDetailControllers.store);
ROUTER.put('/coordinateDetail/update/:id',ctrlCoordinateDetailControllers.update);
ROUTER.delete('/coordinateDetail/delete/:id',ctrl.CoordinateDetailControllers.deleted);


export default ROUTER;
