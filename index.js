// CONFIGURACION PARA EL SERVIDOR EXPRESS
// Importamos express
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Importamos el enrutador de clientes
const clienteRoutes = require('./Routes/clienteRoutes')
// Configuramos las rutas de clientes
app.use('/api/v1/', clienteRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
