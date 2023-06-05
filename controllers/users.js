const { create } = require('../services/users/create')
const { updateUser } = require('../services/users/update')
const {
  findByUsername,
  findByEmail,
  findAll,
  deleteUser,
  userId,
} = require('../services/users/find')

async function _create(user) {
  return await create(user)
}

async function _updateUser(id) {
  return await updateUser(id)
}

async function _deleteUser(id) {
  return await deleteUser(id)
}

async function _userId(id) {
  return await userId(id)
}

async function _findByUsername(username) {
  return await findByUsername(username)
}

async function _findByEmail(correo) {
  return await findByEmail(correo)
}

async function _findAll() {
  return await findAll()
}

module.exports = {
  _create,
  _findByUsername,
  _findByEmail,
  _findAll,
  _deleteUser,
  _userId,
  _updateUser,
}
