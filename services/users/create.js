const db = require('../../models')
const bcrypt = require('bcrypt')

async function create(user) {
  if (!user.username) throw new Error('El nombre de usuario es requerido')
  if (!user.password) throw new Error('La contraseña es obligatoria')
  if (!user.correo) throw new Error('El correo es obligatorio')

  // Buscar el tipo de usuario 'Usuario'
  const userType = await db.user_type.findOne({
    where: { tipo: 'Usuario' },
  })

  // Si no encontramos el tipo de usuario, lanzamos un error
  if (!userType)
    throw new Error(
      'El tipo de usuario "Usuario" no existe en la base de datos'
    )

  return await db.users.create({
    username: user.username,
    correo: user.correo,
    password: bcrypt.hashSync(user.password, 10),
    id_user_type: userType.id, // Aquí asignamos el ID del tipo de usuario
  })
}

module.exports = {
  create,
}
