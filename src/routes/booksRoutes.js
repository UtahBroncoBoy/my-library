import { Router } from 'Express';
import { getCollection } from '../../db.js';
import { books } from '../data/data.js';


const router = new Router();

// app.route('/')
// .get((req,res) => {s
//     return res.json(Books);
// });

router.get ('/', (req,res) =>{
    return res.json(books)
});

export default router;