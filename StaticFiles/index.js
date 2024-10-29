const express = require('express');
const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');

// Set the correct path for the views directory
app.set('views', '../views'); // This is relative to the current file's location

// Serve static files from the 'Public' directory
app.use(express.static('Public'));

// Define a route for the home page
app.get('/', function(req, res) {
    res.render("home"); // Render 'home.pug' located in the 'views' directory
});


// Start the server
app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
