const { Router } = require('express')
const router = Router()
const { _create } = require('../controllers/request')

router.post('/', async (req, res) => {
    try {
        const requestData = req.body
        const request = await _create(requestData)
        return res.status(201).json({
            status: 'success',
            message: 'Solicitud creada exitosamente',
            data: request,
        })
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        })
    }
})

module.exports = router