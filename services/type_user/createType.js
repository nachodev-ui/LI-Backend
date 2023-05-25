const db = require('../../models')

async function createType(type) {
  if (!type.tipo) throw new Error('El tipo es requerido')

  return await db.user_type.create({
    tipo: type.tipo,
  })
}

module.exports = { createType }
