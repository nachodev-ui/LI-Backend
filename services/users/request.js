const moment = require('moment')
const db = require('../../models')
const nodemailer = require('nodemailer')
const { formatDate } = require('../../utils/dateUtils')
const dotenv = require('dotenv').config()

async function create(maintenance) {
  if (!maintenance.fecha_solicitud)
    throw new Error('La fecha de solicitud es requerida')
  if (!maintenance.comentarios)
    throw new Error('Los comentarios son obligatorios')
  if (!maintenance.estado) throw new Error('El estado es requerido')
  if (!maintenance.user_id)
    throw new Error('Tiene que existir un usuario logueado')
  if (!maintenance.correo) throw new Error('El correo del usuario es requerido')

  // Formatear la fecha de solicitud
  const fechaSolicitud = moment(
    maintenance.fecha_solicitud,
    'DD/MM/YYYY HH:mm'
  ).format('DD-MMM-YYYY HH:mm')

  const request = await db.maintenance.create({
    fecha_solicitud: fechaSolicitud,
    comentarios: maintenance.comentarios,
    estado: maintenance.estado,
    correo: maintenance.correo,
    user_id: maintenance.user_id,
    id_tecnico: maintenance.id_tecnico,
  })

  // Envío del correo electrónico
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: maintenance.correo, // Correo del usuario
    subject: 'Confirmación de Solicitud de Mantención',
    html: `
        <h2>Solicitud de Mantención Creada</h2>
        <p>Fecha de Solicitud: ${fechaSolicitud}</p>
        <p>Estado: ${maintenance.estado}</p>
        <div>
          <img src="https://i.ibb.co/CK57WJS/pc-maniac-1.png" alt="Banner" width="100%" style="display: block;">
        </div>
      `,
  }

  await transporter.sendMail(mailOptions)

  return request
}

async function findMaintenance() {
  return await db.maintenance.findAll({
    attributes: [
      'id',
      'correo',
      'comentarios',
      'fecha_solicitud',
      'user_id',
      'estado',
    ],
  })
}

async function findMaintenanceByUserId(id) {
  return await db.maintenance.findAll({
    where: {
      user_id: id,
    },
    attributes: [
      'id',
      'correo',
      'comentarios',
      'fecha_solicitud',
      'user_id',
      'estado',
    ],
  })
}

async function updateRequest(id, fieldsToUpdate) {
  try {
    const maintenance = await db.maintenance.findById(id)

    if (!maintenance) {
      throw new Error('Mantencion Inexistente')
    }

    if (
      maintenance.estado === 'En proceso' ||
      maintenance.estado === 'Finalizada'
    ) {
      // nodemailer para enviar correo al usuario
      const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

      // Formatear la fecha de solicitud
      const fechaSolicitud = moment(
        maintenance.fecha_solicitud,
        'DD/MM/YYYY HH:mm'
      ).format('DD-MM-YYYY HH:mm')

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: maintenance.correo, // Correo del usuario
        subject: 'Actualización de Solicitud de Mantención',
        html: `
            <h2>Solicitud de Mantención Actualizada</h2>
            <p>Fecha de Solicitud: ${fechaSolicitud}</p>
            <p>Estado: ${maintenance.estado}</p>
            <div>
              <img src="https://i.ibb.co/CK57WJS/pc-maniac-1.png" alt="Banner" width="100%" style="display: block;">
            </div>
          `,
      }

      await transporter.sendMail(mailOptions)
    }

    await maintenance.update(fieldsToUpdate)

    return maintenance
  } catch (error) {
    throw new Error('Error la Mantencion no se actualizo: ' + error.message)
  }
}

module.exports = {
  create,
  findMaintenance,
  findMaintenanceByUserId,
  updateRequest,
}
