// creamos el controlador para productos_venta
// importamos el modelo de productos_venta
const productosVentaModel = require('../Models/ProductosVenta')
// creamos la funcion para dar de alta un nuevo producto_venta
const create = async (req, res) => {
  try {
    const newProductoVenta = await productosVentaModel.create(req.body)
    res.status(201).json(newProductoVenta)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}