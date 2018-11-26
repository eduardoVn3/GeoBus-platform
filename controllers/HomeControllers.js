'use strict'
import response from '../helpers/response.js';
import models from '.././config/db.config.js';

var rol = models.Rol
export function index(req,res) {
	rol.findAll()
	.then(result=>{
		return res.json(response.success(result))
	}).catch(err=>{
		return res.json(response.error(err))
	})
}

export function show(req,res) {
	rol.findById(req.params.id)
	.then(result=>{
		return res.json(response.success(result))
	}).catch(err=>{
		return res.json(response.error(err))
	})
}

export function store (req, res) {
	rol.create(req.body)
	.then(result=>{
		return res.json(response.success(result))
	}).catch(err=>{
		return res.json(response.errorValidate(err));
	})
}

export function update (req, res) {
	var data = {
		name : req.body.id
	}
	rol.update({
		name:req.body.name
	},{
		where:{
			id:req.body.id
		}
	})
	.then(result=>{
		if(result === 0){
			return res.json(response.error('Ha ocurrido un error',400))
		}
		return res.json(response.success('Cambio realizado con exito'))
	}).catch(err=>{
		return res.json(response.errorValidate(err));
	})
}