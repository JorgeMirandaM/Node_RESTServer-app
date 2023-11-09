const { Router } = require('express');
const { check, query } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//Obtener todas las categorías - publico
router.get('/',(req,res)=>{
    res.json('get');
});

// Obtener una categoría por id - publico
router.get('/:id',(req,res)=>{
    res.json('get - id');
});

// Crear categoría - privado - cualquier persona con un token válido
router.post('/',(req,res)=>{
    res.json('post');
});

// Actualizat - privado - cualquier con un token válido
router.put('/:id',(req,res)=>{
    res.json('put');
});

//Borrar una categoría - Admin
router.delete('/:id',(req,res)=>{
    res.json('delete');
});

module.exports= router;