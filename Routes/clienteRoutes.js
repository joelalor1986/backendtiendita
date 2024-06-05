// crearemos el enrutador para clientes
// importamos express
const express = require('express')
// importamos el controlador de clientes
const clienteController = require('../Controllers/clienteController')
// creamos el enrutador de express
const router = express.Router()
// creamos las rutas para clientes
router.post('/clientes', clienteController.create)
router.get('/clientes', clienteController.getAll)
router.get('/clientes/:id', clienteController.findOne)
router.put('/clientes/:id', clienteController.update)
router.delete('/clientes/:id', clienteController.remove)
// exportamos el enrutador
module.exports = router
