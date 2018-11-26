'use strict'
import express from 'express'
import ctrl from '../controllers'
const ROUTER = express.Router();

ROUTER.get('/rol',ctrl.HomeControllers.index);
ROUTER.get('/rol/:id',ctrl.HomeControllers.show);
ROUTER.post('/rol/new',ctrl.HomeControllers.store);
ROUTER.put('/rol/update',ctrl.HomeControllers.update);
// ROUTER.get('/rol/new',ctrl.HomeControllers.store);
export default ROUTER
