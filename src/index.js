import Express from 'express';
import Parser from 'body-parser';

import Books from './data/books';
import Dvds from './data/dvd';;



const app = Express();
const port = process.env.PORT || 5000;

app.use(Parser.json());
app.use('/books', Books);

app.listen(port, () => console.log(`App start: http://localhost:5000`));

export default app;