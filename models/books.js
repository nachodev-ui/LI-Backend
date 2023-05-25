const Sequelize = require("sequelize-oracle");

module.exports = (sequelize) => {
  const Book = sequelize.define(
    "book",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      isbn: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [3, 20],
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
      paginas: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      precio: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      imagen: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      idioma: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      fecha_publicacion: {
        type: Sequelize.DATE,
        required: true,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING,
        required: false,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
    },
    {
      underscored: true,
      paranoid: true,
      tableName: "books",
    }
  );

  return Book;
};
