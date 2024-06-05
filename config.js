// configurar  variable de entornodde node  para que knex pueda leer los valores de la base de datos development
const env = process.env.NODE_ENV || 'development'
const knexfile = require('./knexfile')
const knex = require('knex')
module.exports = knex(knexfile[env])
