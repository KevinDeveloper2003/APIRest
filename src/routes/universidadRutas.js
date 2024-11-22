const universidadController = require('../controllers/universidadControlador');
const express = require('express');

const router = express.Router();

router.get('/', universidadController.listarUniversidades);
router.post('/',universidadController.crearUniversidad);
router.put('/:id',universidadController.actualizarUniversidad);
router.delete('/:id', universidadController.eliminarUniversidad);

module.exports = router;