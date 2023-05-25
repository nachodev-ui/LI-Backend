const { createTechnician } = require("../services/technician/create")
const { findAll, findById, deleteById } = require('../services/technician/find')
const { updateTechnician } = require('../services/technician/update')

async function _createTechnician(technician) {
  return await createTechnician(technician)
}

async function _findAll() {
  return await findAll()
}

async function _findById(id) {
  return await findById(id)
}

async function _updateTechnician(id, fieldsToUpdate) {
  return await updateTechnician(id, fieldsToUpdate)
}

async function _deleteById(id) {
  return await deleteById(id)
}

module.exports = {
  _createTechnician,
  _findAll,
  _findById,
  _updateTechnician,
  _deleteById
}
