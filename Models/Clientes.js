// creamos el modelo para clientes
const knex = require('../config')
// creamos o damos de alta un nuevo cliente

const create = (bodyCliente) => {
  return knex('Clientes').insert(bodyCliente).returning('*')
}

// obtener todos los clientes
const getAll = () => {
  return knex('Clientes').select('*')
}
// obtener un cliente por id
const findOne = (id) => {
  return knex('Clientes').where({ id }).select('*')
}
// actualizar un cliente
const update = (id, bodyCliente) => {
  return knex('Clientes').where({ id }).update(bodyCliente).returning('*')
}
// eliminar un cliente
const remove = (id) => {
  return knex('Clientes').where({ id }).del()
}
module.exports = {
  create,
  getAll,
  findOne,
  update,
  remove
}
