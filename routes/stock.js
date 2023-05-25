const express = require('express')
const router = express.Router()
const actualizarStockVenta = require('../functions/procedures')

router.post('/stock', async (req, res) => {
  console.log('POST /stock request body:', req.body) // Agregar registro aquí
  const { libroId, cantidadVendida } = req.body

  // Validar los datos recibidos
  if (
    typeof libroId !== 'number' ||
    typeof cantidadVendida !== 'number' ||
    cantidadVendida <= 0
  ) {
    console.error('Datos de entrada inválidos:', req.body)
    return res.status(400).json({ message: 'Datos de entrada inválidos' })
  }

  try {
    await actualizarStockVenta(libroId, cantidadVendida)
    console.log('Stock actualizado para libroId:', libroId) // Agregar registro aquí
    res.json({ message: 'Stock actualizado' })
  } catch (error) {
    console.error('Error al actualizar el stock:', error)
    res.status(500).json({ message: 'Error al actualizar el stock' })
  }
})

module.exports = router
