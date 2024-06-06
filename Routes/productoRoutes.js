// creamos el enrutador para productos
// importamos express
const express = require('express')
// importamos el controlador de productos
const productoController = require('../Controllers/productoController')
// creamos el enrutador de express
const router = express.Router()
// creamos las rutas para productos
router.post('/productos', productoController.create)
router.get('/productos', productoController.getAll)
router.get('/productos/:id', productoController.findOne)
router.put('/productos/:id', productoController.update)
router.delete('/productos/:id', productoController.remove)
// exportamos el enrutador
module.exports = router
