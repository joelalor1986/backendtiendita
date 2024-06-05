// crearemos el controlador para clientes
// importamos el modelo de clientes
const ModelCliemtes = require('../Models/Clientes')
// creamos la funcion para dar de alta un nuevo cliente
const create = async (req, res) => {
  try {
    const newCliente = await ModelCliemtes.create(req.body)
    res.status(201).json(newCliente)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para obtener todos los clientes
const getAll = async (req, res) => {
  try {
    const clientes = await ModelCliemtes.getAll()
    res.status(200).json(clientes)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para obtener un cliente por id
const findOne = async (req, res) => {
  try {
    const cliente = await ModelCliemtes.findOne(req.params.id)
    res.status(200).json(cliente)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para actualizar un cliente
const update = async (req, res) => {
  try {
    const cliente = await ModelCliemtes.update(req.params.id, req.body)
    res.status(200).json(cliente)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// creamos la funcion para eliminar un cliente
const remove = async (req, res) => {
  try {
    await ModelCliemtes.remove(req.params.id)
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
