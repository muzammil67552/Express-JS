const express = require("express");
const app = express();


app.get('/', function(req,res){
    res.send("Dummy URL For Information")
});
// to pass one parameter ID In URL /example we can also give numeric value and give length to value must give length
app.get('/:id[0-9,a-z {10}]',function(req,res){
    res.send("ID is :" + req.params.id)
})

// more then one parameter pass in url here also
app.get('/user/:name/:id/status/:age', function(req,res){
    res.send("User name are:" + req.params.name +" & id is :" +req.params.id+ "User status is :" +req.params.status+ "User age are:" +req.params.age)
})

app.get('*', function(req,res){
    res.send("Invalid URL Please Enter Correct Url Thank You  ")
})
app.listen(9000);