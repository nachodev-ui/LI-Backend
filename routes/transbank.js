const express = require('express')
const router = express.Router()
const transbankController = require('../controllers/transbankController')

router.post('/create', transbankController.createTransaction)
router.put('/status/:token', transbankController.putTransactionStatus)
router.get('/status/:token', transbankController.getTransaction)

module.exports = router
