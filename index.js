const  express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Hello From Express js Tutorial ");
});
app.get('/contact', function (req, res){
    res.send("Hello From Express  contact page ");
});
app.get('/service', function (req, res){
    res.send("Hello From Express js  service page ");
});

app.post('/hello', function (req, res){
    res.send('hello this a post request from the server');
})
app.all('/hello', function (req, res){
    res.send('hello this a post request from the server');
})

app.listen((8000) ,() =>{
    console.log('Server is running on port  number 8000');
});