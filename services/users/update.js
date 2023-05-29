const db = require('../../models')

async function updateUser(id) {
  try {
    const user = await db.user.findOne({
      where: {
        id,
      },
    })

    if (!user) {
      throw new Error(`No se encontró el usuario con id ${id}`)
    }

    await user.update()

    return `Usuario con id ${id} actualizado correctamente`
  } catch (error) {
    console.error(error)
    throw new Error('Error al actualizar usuario')
  }
}

module.exports = {
  updateUser,
}
