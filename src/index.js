import Express from 'express';
import Parser from 'body-parser';
import cors from 'cors';
import LoggerMiddleWare from 'express-logging';
import Logger form 'logops';

import {loadData} from './data/data.js';
import {deleteData} from './data/data.js';
import user from './routes/userRoutes.js';
import book from './routes/bookRoutes.js';
//import dvd from './routes/dvdRoutes.js';

/*
 *index.js
 * sets up our routes and populates seed data
 * Author: Teresa Walatka
 * Created: 4/27/17
 * Last Updeate: TJW 4/27/17
 * /
 */

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'developement';
const app = Express();
const port = process.env.PORT || 5000;

console.log(port);

//create routes for users and books and dvds

app.use(cors());
app.use(Parser.json());
app.use(LoggerMiddleWare(Logger));

app.use('./userRoutes', user);
app.use('./bookRoutes', book);
app.use('./dvdsRoutes', dvd);

export defualt app;
