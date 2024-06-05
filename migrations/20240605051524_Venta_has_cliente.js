/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // modificar la tabla ventas para agregar la columna cliente_id como clave foranea
  return knex.schema.hasColumn('Ventas', 'cliente_id').then(function (exists) {
    if (exists) {
      return knex.schema.table('Ventas', function (t) {
        // remover la columna cliente_id y crearla como clave foranea
        t.dropColumn('cliente_id')
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
      return knex.schema.table('Ventas', function (t) {
        t.dropColumn('cliente_id')
      })
    }
  })
}
