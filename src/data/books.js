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














