const Sequelize = require('sequelize-oracle')

module.exports = (sequelize) => {
  const userType = sequelize.define(
    'user_type',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [3, 20],
      },
    },
    {
      underscored: true,
      paranoid: true,
      tableName: 'user_type',
    }
  )

  userType.associate = (models) => {
    userType.hasMany(models.users, {
      foreignKey: 'id_user_type',
      as: 'users',
    })
  }

  return userType
}
