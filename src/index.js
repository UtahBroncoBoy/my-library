import Express from 'express';
import Parser from 'body-parser';
import {loadData} from './data/data.js';

import booksRoutes from './routes/booksRoutes.js';
//import dvdsRoutes from './routes/dvdRoutes.js';





const app = Express();
const port = process.env.PORT || 5000;

app.use(Parser.json());
app.use('/books', booksRoutes);

app.listen(port, () => console.log(`App start: http://localhost:5000`));

export default app;