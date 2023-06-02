const Sequelize = require('sequelize-oracle')

module.exports = (sequelize) => {
  const Sale = sequelize.define(
    'sale',
    {
      id_venta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      estado_transaccion: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      monto: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      id_sesion: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      fecha_transaccion: {
        type: Sequelize.DATE,
        required: true,
        allowNull: false,
      },
    },
    {
      tableName: 'sale',
      timestamps: false,
    }
  )

  return Sale
}
