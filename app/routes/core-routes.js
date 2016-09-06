var fs = require('fs');
var index = fs.readFileSync('index.html');

module.exports = function(app) {

	app.get('/', function(req, res){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(index);
	});
	
		app.get('/countries', function(req, res){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end("countries");
	});

};
