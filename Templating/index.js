const express = require('express');
const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');

// Set the views directory (optional if it's already in the root folder)
app.set('views', '../views');

app.get('/home', function(req, res) {
    res.render('home'); // Render 'home.pug' from the views folder
});

app.listen(9000, () => {
    console.log('Server is running on http://localhost:9000');
});
