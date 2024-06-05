/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // crear la columna cliente_id en la tabla ventas como clave foranea
  return knex.schema.hasColumn('Ventas', 'cliente_id').then(function (exists) {
    if (!exists) {
      return knex.schema.table('Ventas', function (t) {
        // agregar la columna cliente_id como clave foranea
        t.integer('cliente_id', 100).notNullable().unsigned().references('Clientes.id')
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasColumn('Ventas', 'cliente_id').then(function (exists) {
    if (exists) {
      return knex.schema.table('Ventas', function (t) {
        t.dropColumn('cliente_id')
      })
    }
  })
}
