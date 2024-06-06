// creamos el enrutador para ventas
// importamos express
const express = require('express')
// importamos el controlador de ventas
const ventaController = require('../Controllers/ventaController')
// creamos el enrutador de express
const router = express.Router()
// creamos las rutas para ventas
router.post('/ventas', ventaController.create)
router.get('/ventas', ventaController.getAll)
router.get('/ventas/:id', ventaController.findOne)
// exportamos el enrutador
module.exports = router
