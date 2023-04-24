const db = require('../../models');
const bcrypt = require('bcrypt');

async function create(user) {
    if (!user.username) throw new Error('El nombre de usuario es requerido');
    if (!user.password) throw new Error('La contraseña es obligatoria');
    if (!user.correo) throw new Error('El correo es obligatorio');

    return await db.user.create({
        username: user.username,
        correo: user.correo,
        password: bcrypt.hashSync(user.password, 10)
    });
}

module.exports = {
    create
}