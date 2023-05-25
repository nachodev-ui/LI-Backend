const Sequelize = require("sequelize-oracle");

module.exports = (sequelize) => {
  const Maintenance = sequelize.define(
    "maintenance",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha_solicitud: {
        type: Sequelize.DATE,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("fecha_solicitud");
          if (rawValue) {
            return rawValue.toISOString().slice(11, 16); // Obtiene solo la parte de hora y minutos (HH:mm)
          }
          return null;
        },
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
      }
    },
    {
      underscored: true,
      paranoid: true,
      tableName: "maintenance",
    }
  );

  Maintenance.associate = (models) => {
    Maintenance.belongsTo(models.users, {
      as: "user",
    });
  };

  return Maintenance;
};
