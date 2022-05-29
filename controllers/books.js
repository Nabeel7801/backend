const db = require('../db/db')

class BooksController {

    async getBooks(req, res) {

        try {
            const data = await db.select()
                .from('books')
            res.status(201).json(data);
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }

    async addBook(req, res) {

        try {
            const { bookName, author, borrowedBy, dateOfBorrow, dateOfReturn } = req.body;
            const [id] = await db('books').insert({
                book_name: bookName,
                author: author,
                borrowed_by: borrowedBy,
                date_of_borrow: dateOfBorrow,
                date_of_return: dateOfReturn,

            })
            .returning('id');

            res.status(201).json(id);
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }

    async getBookById(req, res) {

        try {
            const { id } = req.params;
            const data = await db.select()
                .from('books')
                .where({id})

            res.status(201).json(data);
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }

    async updateBook(req, res) {

        try {
            const { id, bookName, author, borrowedBy, dateOfBorrow, dateOfReturn } = req.body;
            
            await db('books')
            .where({ id })
            .update({
              book_name: bookName,
              author,
              borrowed_by: borrowedBy,
              date_of_borrow: dateOfBorrow,
              date_of_return: dateOfReturn
            })

            res.status(201).json("Updated Successfully");
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }    
    
    async deleteBook(req, res) {

        try {
            const { id } = req.params;
            await db('books')
                .where('id', id)
                .del();

            res.status(201).json("Deleted Successfully");
        }catch (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
        }
        
    }

}

module.exports = new BooksController();