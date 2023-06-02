const { Router } = require('express')
const router = Router()
const {
  createSaleController,
  getSaleByIdController,
} = require('../controllers/sales')

// POST Create a sale
router.post('/', createSaleController)

// GET Get a sale by ID
router.get('/sale/:id', getSaleByIdController)

module.exports = router
