const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const express = require('express');
const app = express();
const router = express.Router();

app.get('/api', (req, res) => res.send('Its working!'));

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
 });



 
 async function run() {
    try {
      await client.connect();
      const database = client.db('After-School-Club');
      const Lessons = database.collection('Lessons');
      // Query for a movie that has the title 'Back to the Future'
      const query = { Subject: 'Maths' };
      const Lesson = await Lessons.findOne(query);
      console.log(Lesson);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);