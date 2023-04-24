const JWTStrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt,
  { _findByUsername } = require("../controllers/users");

module.exports = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
    ignoreExpiration: false,
  },
  async (jwt_payload, done) => {
    try {
      const user = await _findByUsername(jwt_payload.username);
      if (!user) return done(null, false, "No autorizado");
      return done(null, {
        id: user.id,
        username: user.username,
      });
    } catch (e) {
        done(e);
    }
  }
);
