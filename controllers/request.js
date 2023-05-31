const {
  create,
  findMaintenance,
  updateRequest,
} = require('../services/users/request')

async function _create(maintenance) {
  return await create(maintenance)
}

async function _findMaintenance() {
  return await findMaintenance()
}

async function _updateRequest(id, fieldsToUpdate) {
  return await updateRequest(id, fieldsToUpdate)
}

module.exports = {
  _create,
  _findMaintenance,
  _updateRequest,
}
