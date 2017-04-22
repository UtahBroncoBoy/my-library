import { getCollection } from '../../db';
import book from './books'

export let book1 = new book('Stephen King', 'The Shining', 1977, 'Horror', '07443424425', '9780743424424');
export let book2 = new book('Stephen King', 'IT', 1986, 'Horror', '1501156686', '9781501156687');
export let book3 = new book('Dean Koontz', 'The City', 2014, 'Fantasy', '1410470148', '9781410470140');
export let book4 = new book('Greg Iles', 'Mississippi Blood', 2017, 'Crime Mystery', '0062311158', '9780062311153');
export let book5 = new book('Greg Iles', 'The Bone Tree', 2015, 'Crime Mystery', '066323115', '1978006231115');
export let book6 = new book('Greg Iles','Natchez Burning', 2015, 'Crime Mystery', '0062311096', '9780062311092');

//  export let book1 = new book('Stephen King', 'The Shining', 1997, 'horror', '07443424425', '9780743424424');
//  export let book2 = new book('Stephen King', 'IT', 1986, 'Horror', '1501156686', '9781501156687');
export let books = [book1, book2, book3, book4, book5, book6];

export const loadData = async() => {
    const bookCollection = await getCollection('books');
    await bookCollection.insertMany([book1,book2]);
}

 