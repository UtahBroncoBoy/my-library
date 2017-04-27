/**
 * Author: Teresa Walatka 4/15/17
 * Last Updated: 4/27/17
 */

import { Router } from 'express';

import { getCollection } from '../../db.js';
import { books } from '../data/data.js';
import Book from '../data/data.js';


const router = new Router();

/* getAllBooks
* used to get all books
* @return an array of all books
* @TODO link to user
*/
const getAllBooks = async() => {
    const booksCollection = await getCollection('books');
    return await (await paymentCollection.find({ active: true}) ).toArray();
} //end getAllBooks

/* 
* /books Route
* Gets all books
*
* @TODO only return books for one specified user 
*/
router.get ('/', (req,res) => {
    return getAllBooks().then(
        books => {
            return res.json(books);
        });
});

/*
 * /bookss/:id Route
 * Used to get details about a specific book by specifying the id of the book
 * 
 * @TODO only return book for specified user
 */
router.get('/book', (req,res) => {
    return getAllBooks( req.param.book).then(
        book => {
            console.log(book);
            return res.json(book);
        });
});
/*
 * /books/ Post Route
 * Used to store a new item in Mongo
 *
 * @param id The Id of the book
 * @param summary The one line summary of the book
 * @param description The long description or details of the book
  * @param user the user who owns the book
 *
 * @return The newly created instance of the book.
 */
router.post('/', (req,res) => {
    let book = new Book(
      req.body.id,
      req.body.author,
      req.body. title,
      req.body.pubDate,
      req.body.genre,
      req.body.isbn10,
      req.body.isbn13;
    ); //end new Bookk
    storeBook(book);
    return res.json(book);
}); //end router.post

/*
 * /books/ Post Route
 * Used to store a new item in Mongo
 *
 * @param id The Id of the book
 * @param summary The one line summary of the book
 * @param description The long description or details of the book
  * @param user the user who owns the book
 *
 * @return The newly created instance of the book.
 */
const storeBook = async(book) => {
    const bookCollection = await getCollection('book');
     bookCollection.insertOne(book);
}; //end storeBook

/*
 * /bookss/:bookId Delete route
 * Used to delete an book from the list.
 * Note: The book is archived and still exists in the database.
 */
router.delete('./book', (req,res) => {
    removeBook(req.params.bookId);
    return res.send('bood ${req.params.bookId} has been removed.' );
}); //end deletePayment router

/*
 * removeBook
 * Used to set the active flag to false on an book.
 * This will effectivly delete the book for the user.
 */
const removeBook = async(bookId) => {
    const bookCollection = await getCollection('book');
    bookCollection.updateOne(
        { id: parseInt(bookID) },
        { 
            $set: {'active': false }
        }
    );
}

/*
 * deleteBook
 * Used to remove an book from the database.
 * we'll show you how, BUT....
 * Don't remove data, it doesn't end well..
 */
const deleteBook = async(bookId) => {
    const bookCollection = await getCollection('book');
    bookCollection.deleteOne(
        { id: parseInt(bookId) }
    );
}

export default router;
        }
