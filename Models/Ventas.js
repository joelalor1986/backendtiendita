// creamos el modelo para ventas
const knex = require('../config')

// creamos o damos de alta una nueva venta con los productos que se vendieron en ella que vienen el el body de la peticion como un array de objetos con el id del producto y la cantidad vendida

const create = (bodyVenta) => {
  return knex('Ventas').insert(bodyVenta).returning('*')
}
// obtener todas las ventas relacionas con un cliente con los datos de un cliente
const getAll = () => {
  return knex('Ventas')
    .join('Clientes', 'Ventas.cliente_id', 'Clientes.id')
    .select('Ventas.id', 'Ventas.total', 'Clientes.nombre')
}
// obtener una venta por id con los datos del cliente que realizo la venta
const findOne = (id) => {
  return knex('Ventas')
    .join('Clientes', 'Ventas.cliente_id', 'Clientes.id')
    .where('Ventas.id', id)
    .select('Ventas.id', 'Ventas.total', 'Clientes.nombre')
}

// exportamos todas las funciones
module.exports = {
  create,
  getAll,
  findOne
}
