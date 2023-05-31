const { Router } = require('express')
const router = Router()
const { _findAll, _deleteUser, _userId } = require('../controllers/users')
const { deleteUser } = require('../services/users/find')

// GET Oracle users list; localhost:3000/api/users
router.get('/', async (req, res) => {
  try {
    const users = await _findAll()

    return res.status(200).json({
      status: 'success',
      message: 'Lista de usuarios',
      data: users.sort((a, b) => a.id - b.id),
    })
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

// GET Oracle user by id; localhost:3000/api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await _userId(id)

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `No se encontró el usuario con id ${id}`,
      })
    }

    return res.status(200).json({
      status: 'success',
      message: `Usuario con id ${id}`,
      data: user,
    })
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

// UPDATE Oracle user; localhost:3000/api/users/update/:id
router.patch('/update/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await _userId(id)

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `No se encontró el usuario con id ${id}`,
      })
    }

    await user.update(req.body)

    return res.status(200).json({
      status: 'success',
      message: `Usuario con id ${id} actualizado correctamente`,
      data: user,
    })
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

// DELETE Oracle user; localhost:3000/api/users/:id
router.delete('/:id', deleteUser)

module.exports = router
