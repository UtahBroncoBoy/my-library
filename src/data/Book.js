export default class {
    /**
     * constructor method
     * @param author
     * @param title
     * @param origPubDate
     * @param genre
     * @param ISBN10
     * @param ISBN13
     * 
     * @return book
     */

    constructor(author, title, origPubDate, genre,ISBN10, ISBN13) {
        this._author = author;
        this._title = title;
        this._origPubDate = pubDate;
        this._genre = genre;
        this._ISBN10 = ISBN10;
        this._ISBN13 = ISBN13;
    }

    //return the book
    get author() {return this._book; }
    get title() {return this._title;}
    get genre() {return this._genre; }
    get ISBN10() {return this._ISBN10; }
    get ISBN13() {return this._ISBN13;}

    set author(author) {this._author = author; }
    set title(title) {this._title = title; }
    set genre(genre) {this._genre = genre; }
    set ISBN10(ISBN10) {this._ISBN10 = ISBN10; }
    set ISBN13(ISBN13) {this._ISBN13 = ISBN13; }

}















    {
    author: "Stephen King",
    title: "The Shining",
    originalPublishDate: 1977,
    genre: 'Horror',
    ISBN10: 0743424425,
    ISBN13: 9780743424424,
},
{
    author: "Stephen King",
    title: "IT",
    originalPublishDate: 1986,
    genre: 'Horror',
    ISBN10: 1501156683,
    ISBN13: 9781501156687,
},
{
    author: "Dean Koontz",
    title: "The City",
    originalPublishDate: 2014,
    genre: 'Fantasy',
    ISBN10: 1410470148,
    ISBN13: 9781410470140,
},
{
    author: "Greg Iles",
    title: "Mississippi Blood",
    originalPublishDate: 2017,
    genre: 'Crime Mystery',
    ISBN10: 1410470148,
    ISBN13: 9781410470140,
},
{
    author: "Greg Iles",
    title: "The Bone Tree",
    originalPublishDate: 2015,
    genre: 'Crime Mystery',
    ISBN10: 0063231115,
    ISBN13: 9780062311115,
},
{
    author: "Greg Iles",
    title: "Natchez Burning",
    originalPublishDate: 2015,
    genre: 'Crime Mystery',
    ISBN10: 0062311096,
    ISBN13: 9780062311092,
}
];