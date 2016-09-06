var express = require('express'),
path = require('path'),
app = express(),
port = 8080;

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'app')));

// Set up Routes for the application
require('./app/routes/core-routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
