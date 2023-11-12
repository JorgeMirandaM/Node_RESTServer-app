const { Router } = require('express');
const { check, query } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { cargarArchivo } = require('../controllers/uploads');


const router = Router();

router.post('/',cargarArchivo)

module.exports= router;