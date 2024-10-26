const  express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Hello From Express js Tutorial ")
});

app.listen((8000) ,() =>{
    console.log('Server is running on port  number 8000')
});