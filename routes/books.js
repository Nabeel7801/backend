const BooksController = require("../controllers/books")

const express = require('express');
const router = express.Router();

router.get('/getBooks', BooksController.getBooks)

router.get('/getBookById/:id', BooksController.getBookById)

router.post('/addBook', BooksController.addBook)

router.post('/updateBook', BooksController.updateBook)

router.delete('/deleteBook', BooksController.deleteBook)

module.exports = router;