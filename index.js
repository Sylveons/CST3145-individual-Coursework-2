var express = require('express');  
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts')

app.use('/api/posts', posts)

const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'))


app.listen(port, () => console.log('server started on port 8000'));


app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))