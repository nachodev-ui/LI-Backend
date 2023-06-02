const db = require('../../models')

async function createSale(saleData) {
  // Validar los campos obligatorios
  if (!saleData.estado_transaccion)
    throw new Error('El estado de transacción es obligatorio')
  if (!saleData.monto) throw new Error('El monto es obligatorio')
  if (!saleData.id_sesion) throw new Error('El ID de sesión es obligatorio')
  if (!saleData.fecha_transaccion)
    throw new Error('La fecha de transacción es obligatoria')

  // Crear la venta en la base de datos
  return await db.sale.create(saleData)
}

async function getSaleById(saleId) {
  // Obtener una venta por su ID
  if (!saleId) throw new Error('No se proporcionó el ID de venta')
  return await db.sale.findOne({
    where: {
      id_venta: saleId,
    },
  })
}

module.exports = {
  createSale,
  getSaleById,
}
