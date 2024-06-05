/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('Clientes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('Clientes', function (t) {
        t.increments('id').primary()
        t.string('nombre', 100).notNullable()
        t.string('apellido', 100).notNullable()
        t.string('email', 100).notNullable()
        t.string('telefono', 100).notNullable()
        t.string('direccion', 100).notNullable()
        t.string('ciudad', 100).notNullable()
        t.string('estado', 100).notNullable()
        t.string('cp', 100).notNullable()
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('Clientes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('Clientes')
    }
  })
}
