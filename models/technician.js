const Sequelize = require("sequelize-oracle");

module.exports = (sequelize) => {
  const Technician = sequelize.define(
    "technician",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [3, 20],
      },
      apellido: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [3, 20],
      },
      correo: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [5, 20],
      },
      telefono: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [5, 20],
      },
      direccion: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [5, 20],
      },
      ciudad: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [5, 20],
      },
      anios_servicio: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
        len: [5, 20],
      },
    },
    {
      underscored: true,
      paranoid: true,
      tableName: "technician",
    }
  );

  return Technician;
};
