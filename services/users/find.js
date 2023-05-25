const db = require("../../models");

async function deleteUser(id) {
  console.log(id);
  try {
    const user = await db.users.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error(`No se encontró el usuario con id ${id}`);
    }

    await user.destroy();

    return `Usuario con id ${id} eliminado correctamente`;
  } catch (error) {
    console.error(error);
    throw new Error("Error al eliminar usuario");
  }
}

async function userId(id) {
  if (!id) throw new Error("Id de usuario no proporcionado");
  return await db.users.findOne({
    where: {
      id,
    },
  });
}

async function findByUsername(username) {
  if (!username) throw new Error("Nombre de usuario no proporcionado");
  return await db.users.findOne({
    where: {
      username,
    },
  });
}

async function findByEmail(correo) {
  if (!correo) throw new Error("Correo electrónico no proporcionado");
  return await db.users.findOne({
    where: {
      correo,
    },
  });
}

async function findAll() {
  return await db.users.findAll({
    attributes: ["id", "username", "correo", "created_at", "updated_at"],
  });
}

module.exports = {
  deleteUser,
  findByUsername,
  findByEmail,
  findAll,
  userId,
};
