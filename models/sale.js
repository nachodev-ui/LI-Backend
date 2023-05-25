const Sequelize = require("sequelize-oracle");

module.exports = (sequelize) => {
  const Sale = sequelize.define(
    "sale",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha: {
        type: Sequelize.DATE,
        required: true,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      id_book: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      }
    },
    {
      tableName: "sale",
      timestamps: false,
    }
  );

  

  return Sale;
};
