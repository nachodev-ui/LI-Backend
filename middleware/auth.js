const passport = require('passport');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, function(err, user, info) {
        if (err) return res.status(500).json(err);
        if (!user) return res.status(401).json(info);
        req.user = user;
        next();
    })(req, res, next);
};