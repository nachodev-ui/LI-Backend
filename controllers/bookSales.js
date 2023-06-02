const {
  createBookSale,
  getBooksBySaleId,
} = require('../services/bookSales/create')

async function createBookSaleController(req, res) {
  try {
    const bookSaleData = req.body // Obtén los datos del libro de venta desde el cuerpo de la solicitud
    const bookSale = await createBookSale(bookSaleData) // Crea el libro de venta utilizando el servicio correspondiente
    res.status(201).json(bookSale) // Responde con el libro de venta creado
  } catch (error) {
    res.status(400).json({ error: error.message }) // Responde con un error si ocurre alguna excepción
  }
}

async function getBooksBySaleIdController(req, res) {
  try {
    const saleId = req.params.saleId // Obtén el ID de la venta desde los parámetros de la ruta
    const books = await getBooksBySaleId(saleId) // Obtén los libros de venta utilizando el servicio correspondiente
    res.json(books) // Responde con los libros de venta encontrados
  } catch (error) {
    res.status(400).json({ error: error.message }) // Responde con un error si ocurre alguna excepción
  }
}

module.exports = {
  createBookSaleController,
  getBooksBySaleIdController,
}
