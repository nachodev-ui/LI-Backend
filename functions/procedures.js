const oracledb = require('oracledb')
const config = require('../config/config.json')

async function actualizarStockVenta(libroId, cantidadVendida) {
  let connection
  console.log('Actualizando stock...')
  console.log('Libro ID:', libroId)
  console.log('Cantidad vendida:', cantidadVendida)

  try {
    connection = await oracledb.getConnection({
      user: config.development.username,
      password: config.development.password,
      connectString: `${config.development.host}/${config.development.database}`,
    })

    const bindParams = {
      p_LibroID: { dir: oracledb.BIND_IN, val: libroId },
      p_CantidadVendida: { dir: oracledb.BIND_IN, val: cantidadVendida },
    }

    const result = await connection.execute(
      `BEGIN ActualizarStockVenta(:p_LibroID, :p_CantidadVendida); END;`,
      bindParams
    )

    await connection.commit()

    console.log('Stock actualizado correctamente')
  } catch (error) {
    console.error('Error al procesar la venta y actualizar el stock:', error)
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (error) {
        console.error('Error al cerrar la conexión:', error)
        console.error(error.message)
      }
    }
  }
}

module.exports = actualizarStockVenta
