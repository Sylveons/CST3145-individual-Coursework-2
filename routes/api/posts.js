const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();


//get post

router.get('/', async (req,res) => {
    const lessons = await loadlesson();
    res.send(await lessons.find({}).toArray())
} );



router.get('/orders', async (req,res) => {
    const orders = await loadorders();
    res.send(await orders.find({}).toArray())
} );

//add post

router.post('/orders', async(req, res) => {

    const orders = await loadorders();
    await orders.insertOne({

        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Phonenumber: req.body.Phonenumber,
        Lessonid: req.body.Lessonid,
        Spaces: req.body.spaces
    });

    res.status(201).send()
})


//delete post 

async function loadlesson() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     {UseNewUrlParser: true})


return client.db("After-School-Club").collection('Lessons');

}


async function loadorders() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     {UseNewUrlParser: true})


return client.db("After-School-Club").collection('Orders');

}

module.exports = router;