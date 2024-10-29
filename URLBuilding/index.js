const express = require("express");
const app = express();


app.get('/', function(req,res){
    res.send("Dummy URL For Information");
})
// to pass one parameter ID In URL /example
app.get('/:id',function(req,res){
    res.send("ID is :" + req.params.id)
})

// more then one parameter pass in url
app.get('/user/:name/:id/status/:age', function(req,res){
    res.send("User name are:" + req.params.name +" & id is :" +req.params.id+ "User status is :" +req.params.status+ "User age are:" +req.params.age)
})
app.listen(9000);