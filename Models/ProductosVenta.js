// creamos el modelo para productos_venta
const knex = require('../config')
// creamos o damos de alta un nuevo producto_venta
const create = (bodyProductoVenta) => {
  return knex('Productos_Venta').insert(bodyProductoVenta).returning('*')
}

module.exports = {
  create
}
