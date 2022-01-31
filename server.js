const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())




const { MongoClient } = require('mongodb');
const res = require('express/lib/response');
const uri = "mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 8000
app.listen(port)
    console.log("Listening on port 8000");


MongoClient.connect(uri,{ useUnifiedTopology: true })
.then(client => {
var db = client.db("After-School-Club");
db.collection("Lessons").find({}).toArray(function(err, result) {
console.log(result);



app.get("/Lessons",function(req,res){
  db.collection('Lessons').find({}).toArray()
  .then(Lessons => {
    res.render('index.ejs', { Lessons: Lessons })
  

})

app.get("/")


app.get("/",function(req,res){
    res.end("Don't forget to select a collection!");
});

  
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(function(request, response) {
  response.status(404).send("Page not found!");
  });
  


  
})
})
})
