const JWTStrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt,
  { _findByUsername } = require('../controllers/users')

module.exports = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
    ignoreExpiration: false,
  },
  async (jwt_payload, done) => {
    try {
      const user = await _findByUsername(jwt_payload.username)
      if (!user) return done(null, false, { message: 'Usuario no autorizado' })
      return done(null, {
        id: user.id,
        correo: user.correo,
        username: user.username,
        tipo_usuario: user.tipo_usuario,
      })
    } catch (e) {
      done(e)
    }
  }
)
