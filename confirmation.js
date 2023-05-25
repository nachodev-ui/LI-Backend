const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-confirmation', async (req, res) => {
    try {
      // Configuración del transporte del correo
      const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'Libreria-Imagina.soporte@hotmail.com',
          pass: 'LibreriaImagina.,-',
        },
      });
  
      // Opciones para el correo electrónico
      const mailOptions = {
        from: 'Libreria-Imagina.soporte@hotmail.com',
        to: 'pat.suarez@duocuc.cl',
        subject: 'Confirmación de Solicitud de Mantención',
        text: 'Confirmacionado',
        html: `
            <img src="https://i.ibb.co/PwHLHn8/li-login.png">
            `,
        attachments: [
            {
              filename: 'li-login.png', // Nombre del archivo adjunto
              path: 'public/img/li-login.png', // Ruta de la imagen adjunta en tu directorio
            },
          ],
      };
  
      // Envío del correo electrónico
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado: ' + info.response);
  
      res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
    });

module.exports = router;