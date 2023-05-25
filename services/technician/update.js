const db = require("../../models");

async function updateTechnician(id, fieldsToUpdate) {
  try {
    const technician = await db.technician.findById(id);

    if (!technician) {
      throw new Error("El técnico no existe");
    }

    await technician.update(fieldsToUpdate);

    return technician;
  } catch (error) {
    throw new Error("Error al actualizar el técnico: " + error.message);
  }
}

module.exports = {
  updateTechnician,
}
