const Sequelize = require('sequelize-oracle')

module.exports = (sequelize) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      id_user_type: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
    },
    {
      underscored: true,
      paranoid: true,
      tableName: 'users',
    }
  )

  User.associate = (models) => {
    User.belongsTo(models.user_type, {
      foreignKey: 'id_user_type',
      as: 'userType',
    })
  }

  return User
}
