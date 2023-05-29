const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
const dotenv = require('dotenv').config()

router.post('/', async (req, res) => {
  try {
    // Configuración del transporte del correo
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Opciones para el correo electrónico
    const mailOptions = {
      from: 'Libreria-Imagina.soporte@hotmail.com',
      to: 'ig.cisternas@duocuc.cl',
      subject: 'Confirmación de Solicitud de Mantención',
      text: 'Confirmando',
      html: `
        <html>
        <head>
          <title>Confirmación de Solicitud de Mantención</title>
        </head>
        <body>
          <table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                  <img src="https://i.ibb.co/CK57WJS/pc-maniac-1.png" alt="Banner" width="100%" style="display: block;">
              </td>
            </tr>
          </table>
        </body>
        </html>
              `,
    }

    // Envío del correo electrónico
    const info = await transporter.sendMail(mailOptions)
    console.log('Correo enviado: ' + info.response)

    res.status(200).json({ message: 'Correo enviado correctamente' })
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    res.status(500).json({ error: 'Error al enviar el correo' })
  }
})

module.exports = router
