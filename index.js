const express = require("express");
const app = express();

app.get('/', function(req, res){
   res.send("This is Get methode from server");
});
app.post('/', function(req,res){
    res.send("This is the POST Request From The Server")
})

app.put('/', function(req,res){
    res.send("this is the PUT Request From The Server")
})
app.delete('/', function(rrq,res){
    res.send("This is the Delete Request From Server")
})

app.listen(9000);