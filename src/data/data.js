import { getCollection } from '../db.js';
import book from './book.js';
//import dvds from './dvd.js';
import user from './user.js';

export let user1 = new user(24195, 'Teresa', 'twalatka@yahoo.com');
export let user2 = new user(24197, 'Jeff', 'jfredericks@yahoo.com');

//cosntructor(id, author, title, pubDate, genre, isbn10, isbn13)
export let book1 = new book(24195, 'Stephen King', 'The Shining', 1977, 'Horror', '07443424425', '9780743424424');
export let book2 = new book(24195, 'Stephen King', 'IT', 1986, 'Horror', '1501156686', '9781501156687');
export let book3 = new book(24195, 'Dean Koontz', 'The City', 2014, 'Fantasy', '1410470148', '9781410470140');
export let book4 = new book(24195, 'Greg Iles', 'Mississippi Blood', 2017, 'Crime Mystery', '0062311158', '9780062311153');
export let book5 = new book(24195, 'Greg Iles', 'The Bone Tree', 2015, 'Crime Mystery', '066323115', '1978006231115');
export let book6 = new book(24195, 'Greg Iles','Natchez Burning', 2015, 'Crime Mystery', '0062311096', '9780062311092');

export const loadData = async() => {
    const users = await getCollection('users');

    const loans = await getCollection('books');

    //const dvds = await getCollection('dvds');
}

 