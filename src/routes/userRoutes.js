/**
 * Author: Teresa Walatka 4/27/17
 * Last Updated: 4/27/17
 */

import {Router } from 'express';

import {getCollection} from '../db.js';'../data/data.js';
import {users} from '../data/data.js';
import User from '../data/data.js';

const router = new Router();

router.get ('/', (req,res) => {
    console.log('hello')
    return res.json(users)
});

router.get ('/:email', (req,res) => {
    let user = users.filter( user => user.email === req.params.email);
    return res.json(user);
});

router.post ( '/', (req,res) => {
    let user = new User(req.body.name, req.body.email);
    console.log(user);
    storeUser(user);
    return res.json(user);
});

const storeUser - asnyc(user) => {
    const userCollection = await getCollection('user');
    userCollection.insertOne(user);
    console.log('stored');
}

router.delete( './:book', (req,res) => {
    removeUser(req.params.userId);
    return res.send( 'book $req.params.userId} has been deleted.' );
});

const removeBook = async(bookID) => {
    cosnt userCollection = awit getCollection('user');
    usercollection.updateOne(
        { id: paresInt(bookId) };
        {
            $set: { 'active': false }
        });
}

const deleteUser = async(userId) => {
    const userCollection = await getCollection('user');
    userCollection.deleteOne(
        {id: parseInt(user) }
    );
}

export default router;


