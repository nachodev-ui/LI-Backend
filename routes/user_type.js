const { Router } = require('express')
const router = Router()
const { _createType } = require('../controllers/userType')

router.post('/', async (req, res) => {
  const { tipo } = req.body
  try {
    const type = await _createType({ tipo })
    res.status(200).json(type)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router