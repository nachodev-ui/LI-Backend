const express = require('express'),
router = express.Router(),
{ _create, _findByUsername } = require('../controllers/users');
passport = require('passport'),
jwt = require('jsonwebtoken');

router.post('/signin', async(req, res, next) => {
    passport.authenticate('local', {session: false}, function(err, user, info) {
        if (err) return res.status(500).json(err);
        if (!user) return res.status(400).json(info);

        const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({
            token, 
            expiresIn: 3600,
            user
        })
    })(req, res, next);
});

router.post('/signup', async(req, res) => {
    try {
        const foundUser = await _findByUsername(req.body.username);
        if(foundUser) {
            return res.status(400).json(`El usuario ${foundUser.username} ya existe`)
        }

        const user = await _create(req.body);
        return res.status(201).json({
            status: 'success',
            message: `El usuario ${user.username} fue creado satisfactoriamente.`
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
});

module.exports = router;