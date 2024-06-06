// crearemos el modelo para productos
const knex = require('../config')
// creamos o damos de alta un nuevo producto
const create = (bodyProducto) => {
  return knex('Productos').insert(bodyProducto).returning('*')
}
// obtener todos los productos
const getAll = () => {
  return knex('Productos').select('*')
}
// obtener un producto por id
const findOne = (id) => {
  return knex('Productos').where({ id }).select('*')
}
// actualizar un producto
const update = (id, bodyProducto) => {
  return knex('Productos').where({ id }).update(bodyProducto).returning('*')
}
// eliminar un producto
const remove = (id) => {
  return knex('Productos').where({ id }).del()
}
module.exports = {
  create,
  getAll,
  findOne,
  update,
  remove
}
