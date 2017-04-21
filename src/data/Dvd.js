//DVD class to populate development environment with data

export default class {

/**
 * 
 * @param {*} id 
 * @param {*} title 
 * @param {*} producer 
 * @param {*} releaseDate 
 * @param {*} rating 
 * @param {*} genre 
 */

  constructor(id, title, producer, releaseDate, rating, genre) {
    this._id = id;
    this._title = title;
    this._producer = producer;
    this._releaseDate = releaseDate;
    this._rating = rating;
    this._genre = genre;
  }
  get title() {return this._title;}
  get producer() {return this._producer;}
  get releaseDate() {return this._releaseDate;}
  get rating() {return this._rating;}
  get genre() {return this._genre;}

  set title(title) {this._title = title;}
  set producer(producer) {this._producer = producer;}
  set releaseDate(releaseDate) {this._releaseDate = releaseDate;}
  set rating(rating) {this._rating = rating;}
  set genre(genre) {this._genre = genre;}

};