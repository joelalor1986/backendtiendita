/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('Ventas').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('Ventas', function (t) {
        t.increments('id').primary()
        t.integer('cliente_id', 100).notNullable().unsigned().references('Clientes.id')
        t.float('total', 100).notNullable()
        t.dateTime('fecha', 100).notNullable()
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('Ventas').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('Ventas')
    }
  })
}
