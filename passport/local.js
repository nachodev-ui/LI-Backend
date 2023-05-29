const LocalStrategy = require('passport-local').Strategy,
  { _findByEmail } = require('../controllers/users'),
  bcrypt = require('bcrypt')

module.exports = new LocalStrategy(
  { usernameField: 'correo', session: false },
  async (correo, password, done) => {
    try {
      const user = await _findByEmail(correo)
      if (!user) return done(null, false, 'Correo y/o contraseña incorrectos')

      const match = bcrypt.compareSync(password, user.password)
      if (!match) return done(null, false, 'Correo y/o contraseña incorrectos')

      return done(null, {
        id: user.id,
        correo: user.correo,
        username: user.username,
        tipo_usuario: user.tipo_usuario,
      })
    } catch (e) {
      return done(e)
    }
  }
)
