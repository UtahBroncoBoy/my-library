//DVD class to populate development environment with data

export default class {

/**
 * 
 * @param {*} id 
 * @param {*} title 
 * @param {*} studio 
 * @param {*} releaseDate 
 * @param {*} rating 
 */

  constructor(id, title, studio, releaseDate, rating) {
    this._id = id;
    this._title = title;
    this._studio = studio;
    this._releaseDate = releaseDate;
    this._rating = rating;
  }
  get title() {return this._title;}
  get studio() {return this._studio;}
  get releaseDate() {return this._releaseDate;}
  get rating() {return this._rating;}

  set title(title) {this._title = title;}
  set stuido(studio) {this.studio = studio;}
  set releaseDate(releaseDate) {this._releaseDate = releaseDate;}
  set rating(rating) {this._rating = rating;}

};