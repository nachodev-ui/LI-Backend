const Sequelize = require('sequelize-oracle')

module.exports = (sequelize) => {
  const Maintenance = sequelize.define(
    'maintenance',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha_solicitud: {
        type: Sequelize.DATE,
        allowNull: false,
        required: true,
      },
      comentarios: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      correo: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      underscored: true,
      paranoid: true,
      tableName: 'maintenance',
    }
  )

  Maintenance.associate = (models) => {
    Maintenance.belongsTo(models.user, {
      as: 'user',
    })
  }

  return Maintenance
}
