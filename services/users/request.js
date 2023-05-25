const moment = require('moment')
const db = require('../../models')

async function create(maintenance) {
  if (!maintenance.fecha_solicitud) throw new Error('La fecha de solicitud es requerida')
  if (!maintenance.comentarios) throw new Error('Los comentarios son obligatorios')
  if (!maintenance.estado) throw new Error('El estado es requerido')
  if (!maintenance.id_user) throw new Error('El id del usuario es requerido')
  if (!maintenance.correo) throw new Error('El correo del usuario es requerido')

  const formattedDate = moment(maintenance.fecha_solicitud,'DD/MM/YYYY HH:mm').toDate()

  return await db.maintenance.create({
    fecha_solicitud: formattedDate,
    comentarios: maintenance.comentarios,
    estado: maintenance.estado,
    id_user: maintenance.id_user,
    correo: maintenance.correo,
  })
}

module.exports = {
  create,
}
