// creamos el controlador para ventas
// importamos el modelo de ventas
const ventaModel = require('../Models/Ventas')
// creamos la funcion para dar de alta una nueva venta
const create = async (req, res) => {
  try {
    const newVenta = await ventaModel.create(req.body)
    res.status(201).json(newVenta)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para obtener todas las ventas
const getAll = async (req, res) => {
  try {
    const ventas = await ventaModel.getAll()
    res.status(200).json(ventas)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para obtener una venta por id
const findOne = async (req, res) => {
  try {
    const venta = await ventaModel.findOne(req.params.id)
    res.status(200).json(venta)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// exportamos todas las funciones
module.exports = {
  create,
  getAll,
  findOne
}
