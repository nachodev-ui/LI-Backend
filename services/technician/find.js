const db = require("../../models");

async function findAll() {
  return await db.technician.findAll({
    attributes: [
      "id",
      "nombre",
      "apellido",
      "correo",
      "telefono",
      "ciudad",
      "direccion",
      "created_at",
      "updated_at",
    ],
  });
}

async function findById(id) {
  if (!id) throw new Error("Id de técnico no proporcionado");

  return await db.technician.findOne({
    where: {
      id,
    },
  })
}

async function deleteById(id) {
  if (!id) throw new Error("Id de técnico no proporcionado");

  return await db.technician.destroy({
    where: {
      id,
    },
  })
}

module.exports = {
  findAll,
  findById,
  deleteById
};
