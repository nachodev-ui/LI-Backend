const db = require('../../models');

async function createBook(book) {
    if (!book.isbn) throw new Error('El ISBN es requerido');
    if (!book.titulo) throw new Error('El titulo es obligatorio');
    if (!book.autor) throw new Error('El autor es obligatorio');
    if (!book.editorial) throw new Error('La editorial es obligatoria');
    if (!book.paginas) throw new Error('El numero de paginas es obligatorio');
    if (!book.precio) throw new Error('El precio es obligatorio');
    if (!book.imagen) throw new Error('La imagen es obligatoria');
    if (!book.genero) throw new Error('El genero es obligatorio');
    if (!book.idioma) throw new Error('El idioma es obligatorio');
    if (!book.fecha_publicacion) throw new Error('La fecha de publicacion es obligatoria');
    if (!book.descripcion) throw new Error('La descripcion es obligatoria');
    if (!book.stock) throw new Error('El stock es obligatorio');

    return await db.book.create({
        isbn: book.isbn,
        titulo: book.titulo,
        autor: book.autor,
        editorial: book.editorial,
        paginas: book.paginas,
        precio: book.precio,
        imagen: book.imagen,
        genero: book.genero,
        idioma: book.idioma,
        fecha_publicacion: book.fecha_publicacion,
        descripcion: book.descripcion,
        stock: book.stock
    });
}

module.exports = {
    createBook
}