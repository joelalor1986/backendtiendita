// crearemos el controlador para productos
// importamos el modelo de productos
const ModelProductos = require('../Models/Productos')
// creamos la funcion para dar de alta un nuevo producto
const create = async (req, res) => {
  try {
    const newProducto = await ModelProductos.create(req.body)
    res.status(201).json(newProducto)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para obtener todos los productos
const getAll = async (req, res) => {
  try {
    const productos = await ModelProductos.getAll()
    res.status(200).json(productos)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para obtener un producto por id
const findOne = async (req, res) => {
  try {
    const producto = await ModelProductos.findOne(req.params.id)
    res.status(200).json(producto)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para actualizar un producto
const update = async (req, res) => {
  try {
    const producto = await ModelProductos.update(req.params.id, req.body)
    res.status(200).json(producto)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para eliminar un producto
const remove = async (req, res) => {
  try {
    await ModelProductos.remove(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// exportamos todas las funciones
module.exports = {
  create,
  getAll,
  findOne,
  update,
  remove
}
