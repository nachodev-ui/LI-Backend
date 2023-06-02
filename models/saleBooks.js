const Sequelize = require('sequelize-oracle')

module.exports = (sequelize) => {
  const saleBook = sequelize.define(
    'saleBook',
    {
      id_venta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orden_id: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      autor: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      editorial: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      cantidad: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
    },
    {
      tableName: 'saleBook',
      timestamps: false,
    }
  )

  return saleBook
}
