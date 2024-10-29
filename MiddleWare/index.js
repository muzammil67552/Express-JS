const express = require('express');
const app = express();

// middleware ware will be use here 
app.use('/:age', function(req,res,next){
   
    if(req.params.age < 18){
        res.redirect('/fail')
    }
    next();

})
app.get('/fail', function(req,res){
    res.send('you  can not access this web site because you are under 18')
})

//for middle ware must create this router as compare to app.use router
app.get('/:age', function(req,res){
      res.send("Your age are :" +req.params.age+"You can acces the web")
})



app.listen(9000);