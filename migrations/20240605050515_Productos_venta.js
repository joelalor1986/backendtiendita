/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('Productos_venta').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('Productos_venta', function (t) {
        t.increments('id').primary()
        t.integer('producto_id').notNullable().unsigned().references('productos.id')
        t.integer('venta_id').notNullable().foreign().references('id').inTable('Ventas')
        t.integer('cantidad').notNullable()
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('Productos_venta').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('Productos_venta')
    }
  })
}
