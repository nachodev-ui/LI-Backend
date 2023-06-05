const { Router } = require('express')
const router = Router()
const { _findAll, _userId, _deleteUser } = require('../controllers/users')
const { deleteUser } = require('../services/users/find')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

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
router.patch('/update/:id', upload.single('imagen'), async (req, res) => {
  try {
    const { id } = req.params
    const user = await _userId(id)

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `No se encontró el usuario con id ${id}`,
      })
    }

    // Procesa la imagen si se ha recibido una
    if (req.file) {
      // Aquí puedes almacenar la ruta del archivo en el servidor en el usuario,
      // o puedes almacenarlo en un servicio de almacenamiento de archivos como AWS S3,
      // y luego almacenar la URL de la imagen en la base de datos.
      req.body.imagen = req.file.path
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
//   try {
//     const { id } = req.params
//     const user = await _userId(id)

//     if (!user) {
//       return res.status(404).json({
//         status: 'error',
//         message: `No se encontró el usuario con id ${id}`,
//       })
//     }

//     await _updateUserImage(id, req.file.path)

//     return res.status(200).json({
//       status: 'success',
//       message: `Usuario con id ${id} actualizado correctamente`,
//       data: user,
//     })
//   } catch (e) {
//     return res.status(500).json(e.message)
//   }
// })

// DELETE Oracle user; localhost:3000/api/users/:id

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await _userId(id)

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `No se encontró el usuario con id ${id}`,
      })
    }

    await _deleteUser(id)

    return res.status(200).json({
      status: 'success',
      message: `Usuario con id ${id} eliminado correctamente`,
    })
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

module.exports = router
