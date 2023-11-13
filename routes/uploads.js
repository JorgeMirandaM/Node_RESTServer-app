const { Router } = require('express');
const { check, query } = require('express-validator');
const { validarCampos,validarArchivoSubir } = require('../middlewares');
const { cargarArchivo, actualizarImagen } = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers');


const router = Router();

router.post('/',cargarArchivo);

router.put('/:coleccion/:id',[
    validarArchivoSubir,
    check('id','El id debe ser de mongo').isMongoId(),
    check('coleccion').custom(c=> coleccionesPermitidas(c,['usuarios','productos'])),
    validarCampos
],actualizarImagen);

module.exports= router;