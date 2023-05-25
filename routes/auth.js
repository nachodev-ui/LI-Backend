const { body, validationResult } = require('express-validator')
const express = require('express'),
  router = express.Router(),
  { _create, _findByUsername, _findByEmail } = require('../controllers/users')
;(passport = require('passport')), (jwt = require('jsonwebtoken'))

router.post('/signin', async (req, res, next) => {
  passport.authenticate(
    'local',
    { session: false },
    function (err, user, info) {
      if (err) return res.status(500).json(err)
      if (!user) return res.status(400).json(info)

      const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' })
      return res.status(200).json({
        token,
        expiresIn: 3600,
        user,
      })
    }
  )(req, res, next)
})

router.post(
  '/signup',
  [
    body('username')
      .isLength({ min: 3 })
      .withMessage('El nombre de usuario debe tener al menos 3 caracteres.'),
    body('password')
      .isLength({ min: 5 })
      .withMessage('La contraseña debe tener al menos 5 caracteres.'),
    body('correo').isEmail().withMessage('El correo electrónico no es válido.'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const foundUser = await _findByUsername(req.body.username)
      if (foundUser) {
        return res
          .status(400)
          .json(`El usuario ${foundUser.username} ya existe`)
      }

      const foundEmail = await _findByEmail(req.body.correo)
      if (foundEmail) {
        return res.status(400).json(`El correo ${foundEmail.correo} ya existe`)
      }

      const user = await _create(req.body)
      return res.status(201).json({
        status: 'success',
        message: 'Usuario creado exitosamente',
        data: user,
      })
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
)

module.exports = router
