var express = require('express');  
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts')

app.use('/api/posts', posts)

if(process.env.NODE_ENV === 'production') {

app.use(express.static(__dirname + '/public/'))


app.get(/.*/, (req,res) => res.sendFile(__dirname + 'client/public/index.html/'))
}

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('server started on port 8000'));



