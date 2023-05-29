const Sequelize = require('sequelize-oracle')

module.exports = (sequelize) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo_usuario: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      username: {
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
        allowNull: true,
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ciudad: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
      tableName: 'user',
    }
  )

  return User
}
