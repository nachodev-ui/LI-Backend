const db = require('../../models')

async function createSale(saleData) {
  // Validar los campos obligatorios
  if (!saleData.id_cliente) throw new Error('El ID de usuario es obligatorio')
  if (!saleData.id_envio) throw new Error('El ID de producto es obligatorio')
  if (!saleData.estado_transaccion)
    throw new Error('El estado de transacción es obligatorio')
  if (!saleData.monto) throw new Error('El monto es obligatorio')
  if (!saleData.id_sesion) throw new Error('El ID de sesión es obligatorio')
  if (!saleData.fecha_transaccion)
    throw new Error('La fecha de transacción es obligatoria')

  saleData.estado_envio = 'En preparación'

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
