const { createSale, getSaleById } = require('../services/sales/create')

async function createSaleController(req, res) {
  try {
    const saleData = req.body // Obtén los datos de la venta desde el cuerpo de la solicitud
    const sale = await createSale(saleData) // Crea la venta utilizando el servicio correspondiente
    res.status(201).json(sale) // Responde con la venta creada
  } catch (error) {
    res.status(400).json({ error: error.message }) // Responde con un error si ocurre alguna excepción
  }
}

async function getSaleByIdController(req, res) {
  try {
    const saleId = req.params.id // Obtén el ID de la venta desde los parámetros de la ruta
    const sale = await getSaleById(saleId) // Obtén la venta utilizando el servicio correspondiente
    if (sale) {
      res.json(sale) // Responde con la venta encontrada
    } else {
      res.status(404).json({ error: 'Venta no encontrada' }) // Responde con un error si la venta no existe
    }
  } catch (error) {
    res.status(400).json({ error: error.message }) // Responde con un error si ocurre alguna excepción
  }
}

module.exports = {
  createSaleController,
  getSaleByIdController,
}
