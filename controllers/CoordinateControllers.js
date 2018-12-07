'use stric';
import response from '../helpers/response.js';
import models from '.././config/db.config.js';

var coordinate = models.Coordinate;
export function index(req,res) {
	coordinate.findAll()
	.then(result=>{
		return res.json(response.success(result))
	}).catch(err=>{
		return res.json(response.error(err))
	})
}

export function show(req,res) {
	coordinate.findById(req.params.id)
	.then(result=>{
		return res.json(response.success(result))
	}).catch(err=>{
		return res.json(response.error(err))
	})
}

export function store (req, res) {
	coordinate.create(req.body)
	.then(result=>{
		return res.json(response.success(result))
	}).catch(err=>{
		return res.json(response.errorValidate(err));
	})
}

export function update (req, res) {
	coordinate.update(req.body,{
		where:{
			id:req.params.id
		}
	})
	.then(result=>{
		if(result === 0){
			return res.json(response.error('Ha ocurrido un error',400))
		}
		return res.json(response.success('Cambio realizado con exito'))
	}).catch(err=>{
		return res.json(response.errorValidate(err));
	});
}

export function deleted (req, res) {
	coordinate.destroy({
		where:{
			id:req.params.id
		}
	}).then(result=>{
		if(result === 0){
			return res.json(response.error('Ha ocurrido un error',400))
		}
		return res.json(response.success('Eliminado con exito'))
	}).catch(err=>{
		return res.json(response.error(err));
	})
}