//import uuid tool
import uuid from 'uuid/v4';

//import dvd class
import Dvd from './Dvd';

//import getCollection method from db.js
import {getCollection} from '../db';

//create DVD instances and place in an array
let miracleDVD = new Dvd(uuid(), 'Miracle', 'Disney', 2004, 'PG');
let moanaDVD = new Dvd(uuid(), 'Moana','Disney',2016,'PG');
let jawsDVD = new Dvd(uuid(), 'Jaws', 'Universal', 1975, 'PG');
let greaseDVD = new Dvd(uuid(), 'Grease', 'Paramount', 1978, 'PG-13');
let independenceDayDVD = new Dvd(uuid(), 'Independece Day', '20th Century Fox', 1996, 'PG-13');
export const dvds = [miracleDVD, moanaDVD, jawsDVD, greaseDVD, independenceDayDVD];

//grab the dvds collection and add dvd instances to it for development purposes
export const loadDvdData = async () => {
  const dvdCollection = await getCollection('dvds');
  const result = await dvdCollection.insertMany(dvds);
};