const { Router } = require('express')
const router = Router()
const {
  createBookSaleController,
  getBooksBySaleIdController,
} = require('../controllers/bookSales')

// POST Create a book sale
router.post('/', createBookSaleController)

// GET Get books by sale ID
router.get('/bookSale/:saleId', getBooksBySaleIdController)

module.exports = router
