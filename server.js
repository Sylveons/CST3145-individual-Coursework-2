
var express = require('express');  
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const posts = require('./routes/api/posts')

//middleware
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 8000;

app.listen(port, () => console.log('server started on port 8000'));



 app.use(express.static(__dirname + '/public'));


const { MongoClient } = require('mongodb');
const res = require('express/lib/response');
const uri = "mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


   

MongoClient.connect(uri,{ useUnifiedTopology: true })
.then(client => {
var db = client.db("After-School-Club");
db.collection("Lessons").find({}).toArray(function(err, result) {
console.log(result);



app.get("/",function(req,res){
  db.collection('Lessons').find({}).toArray()
  .then(Lessons => {
    res.render('index.ejs', { Lessons: Lessons })
  

})





  
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
