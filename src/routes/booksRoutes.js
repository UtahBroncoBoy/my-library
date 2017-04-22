import { Router} from 'express';
import Books from '../data/books';

const router = new Router();

// app.route('/')
// .get((req,res) => {
//     return res.json(Books);
// });

router.get ('/', (req,res) =>{
    return res.json(Books)
});

export default app;