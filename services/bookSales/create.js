const db = require('../../models')

async function createBookSale(bookSaleData) {
  // Validar que se proporcionaron los datos necesarios
  if (!bookSaleData.orden_id)
    throw new Error('No se proporcionó el ID de orden')
  if (!bookSaleData.cliente_id)
    throw new Error('No se proporcionó el ID de cliente')
  if (!bookSaleData.titulo) throw new Error('El título es obligatorio')
  if (!bookSaleData.autor) throw new Error('El autor es obligatorio')
  if (!bookSaleData.editorial) throw new Error('La editorial es obligatoria')
  if (!bookSaleData.cantidad) throw new Error('La cantidad es obligatoria')

  // Crear el libro asociado a la venta en la base de datos
  return await db.saleBook.create(bookSaleData)
}

async function getBooksBySaleId(saleId) {
  // Obtener los libros asociados a una venta por su ID
  if (!saleId) throw new Error('No se proporcionó el ID de venta')
  return await db.saleBook.findAll({
    where: {
      id_venta: saleId,
    },
  })
}

module.exports = {
  createBookSale,
  getBooksBySaleId,
}
