const { Router } = require('express')
const router = Router()
const {
  createBookSaleController,
  getBooksBySaleIdController,
  getBooksByUserIdController,
  getAllBooksController,
} = require('../controllers/bookSales')

// POST Create a book sale
router.post('/', createBookSaleController)

// GET Get books by sale ID
router.get('/:saleId', getBooksBySaleIdController)

// GET Get books by user ID
router.get('/user/:userId', getBooksByUserIdController)

// GET Get all books
router.get('/', getAllBooksController)

module.exports = router
