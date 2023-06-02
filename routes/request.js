const { Router } = require('express')
const router = Router()
const {
  _create,
  _findMaintenance,
  _findMaintenanceByUserId,
  _updateRequest,
} = require('../controllers/request')

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

router.get('/', async (req, res) => {
  try {
    const request = await _findMaintenance()
    return res.status(200).json({
      status: 'success',
      message: 'Solicitud encontrada',
      data: request,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
})

// GET maintenance by user id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const request = await _findMaintenanceByUserId(id)
    return res.status(200).json({
      status: 'success',
      message: 'Solicitud encontrada',
      data: request,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const fieldsToUpdate = req.body
    const request = await _updateRequest(id, fieldsToUpdate)
    return res.status(200).json({
      status: 'success',
      message: 'Solicitud actualizada exitosamente',
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
