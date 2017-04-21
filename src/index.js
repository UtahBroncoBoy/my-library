import Express from 'express';
import Parser from 'body-parser';

import Books from './data/books';
import Dvds from './data/dvd';;



const app = Express();
const port = process.env.PORT || 3000;

app.use(Parser.json());
app.use('/books', BooksRoute);

app.listen(port, () => console.log(`App start: http://localhost:3000`));

export default app;