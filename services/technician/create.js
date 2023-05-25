const db = require("../../models");
const bcrypt = require('bcrypt');

async function createTechnician(technician) {
  if (!technician.nombre) throw new Error("El nombre es requerido");
  if (!technician.apellido) throw new Error("El apellido es obligatorio");
  if (!technician.correo) throw new Error("El correo es obligatorio");
  if (!technician.password) throw new Error("La contraseña es obligatoria");
  if (!technician.telefono) throw new Error("El telefono es obligatorio");
  if (!technician.direccion) throw new Error("La direccion es obligatoria");
  if (!technician.ciudad) throw new Error("La ciudad es obligatoria");
  if (!technician.anios_servicio)
    throw new Error("Los años de servicio son obligatorios");

  return await db.technician.create({
    nombre: technician.nombre,
    apellido: technician.apellido,
    correo: technician.correo,
    password: bcrypt.hashSync(technician.password, 10),
    telefono: technician.telefono,
    direccion: technician.direccion,
    ciudad: technician.ciudad,
    anios_servicio: technician.anios_servicio,
  });
}

module.exports = {
    createTechnician,
};