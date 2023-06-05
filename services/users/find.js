const db = require('../../models')

async function deleteUser(id) {
  if (!id) throw new Error('Id de usuario no proporcionado')
  return await db.user.destroy({
    where: {
      id,
    },
  })
}

async function userId(id) {
  if (!id) throw new Error('Id de usuario no proporcionado')
  return await db.user.findOne({
    where: {
      id,
    },
  })
}

async function findByUsername(username) {
  if (!username) throw new Error('Nombre de usuario no proporcionado')
  return await db.user.findOne({
    where: {
      username,
    },
  })
}

async function findByEmail(correo) {
  if (!correo) throw new Error('Correo electrónico no proporcionado')
  return await db.user.findOne({
    where: {
      correo,
    },
  })
}

async function findAll() {
  return await db.user.findAll({
    attributes: ['id', 'username', 'correo', 'created_at', 'updated_at'],
  })
}

module.exports = {
  deleteUser,
  findByUsername,
  findByEmail,
  findAll,
  userId,
}
