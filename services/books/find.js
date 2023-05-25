const db = require("../../models");

async function findBooks() {
  return await db.book.findAll({
    attributes: [
      "id",
      "isbn",
      "titulo",
      "autor",
      "editorial",
      "paginas",
      "precio",
      "imagen",
      "genero",
      "idioma",
      "fecha_publicacion",
      "descripcion",
      "stock",
    ],
  });
}

module.exports = {
  findBooks,
};
