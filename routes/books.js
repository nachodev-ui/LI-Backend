const { Router } = require('express')
const router = Router()
const { _createBook, _findBooks, _updateBook } = require('../controllers/books')

router.post('/', async (req, res) => {
  try {
    const bookData = req.body

    // Formato dd/mm/yyyy con la función formatDate
    const fecha_publicacion = formatDate(bookData.fecha_publicacion)
    bookData.fecha_publicacion = fecha_publicacion

    const book = await _createBook(bookData)
    return res.status(201).json({
      status: 'success',
      message: 'Libro creado exitosamente',
      data: book,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
})

function formatDate(dateString) {
  const parts = dateString.split('-') // Separar la cadena por "-"
  const day = parts[0]
  const month = parts[1]
  const year = parts[2]

  return `${year}-${month}-${day}` // Formato yyyy-mm-dd
}

router.get('/', async (req, res) => {
  try {
    const books = await _findBooks()
    return res.status(200).json({
      status: 'success',
      message: 'Libros encontrados',
      data: books,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
})

router.patch('/:id', async (req, res) => {
  const bookId = req.params.id
  const fieldsToUpdate = req.body

  try {
    const updatedBook = await _updateBook(bookId, fieldsToUpdate)
    res.json(updatedBook)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
