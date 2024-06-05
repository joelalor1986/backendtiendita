/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('Productos').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('Productos', function (t) {
        t.increments('id').primary()
        t.string('nombre', 100).notNullable()
        t.string('descripcion', 100).notNullable()
        t.string('precio', 100).notNullable()
        t.string('stock', 100).notNullable()
        t.string('sku', 100).notNullable().unique()
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('Productos').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('Productos')
    }
  })
}
