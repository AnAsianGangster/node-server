module.exports = (router) => {
    const books = require('../controllers/book.controller.js');

    // Create a new book
    router.post('/books', books.createBook);

    // Retrieve all books with reviews
    router.get('/books', books.findAllBooks);
    
    // Retrieve a single book with id
    router.get('/books/:asin', books.findBookById);

    // Retrieve a single book with authour
    router.get('/books/:author:title', books.findBookByAuthorTitle);

    // update a single book with id
    router.put('/books/:asin', books.updateBookById);
};
