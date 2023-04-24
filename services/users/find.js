const db = require('../../models');

async function findByUsername(username) {
    if (!username) throw new Error('Nombre de usuario no proporcionado');
    return await db.user.findOne({
        where: {
            username
        }
    });
}

async function findAll() {
    return await db.user.findAll({
        attributes: [
            'id',
            'username',
            'correo',
            'created_at',
            'updated_at'
        ]
    });
}

module.exports = {
    findByUsername,
    findAll
}