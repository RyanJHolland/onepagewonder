var express = require('express'),
path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));



// view engine ejs
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');

app.get('/*', function(req, res) {
	
	if (req.url == '/' || req.url == '/index.html') {
		console.log(req.url + '   (A)');
		res.render('index', { requestedURL: 'index.html' });
	}

	else if (req.url.substring(0,15) == '/public/videos/') {
		console.log(req.url + '   (B)');
		res.sendFile(path.join(__dirname, req.url));
	}

	else {
		console.log(req.url + '   (C)');
		res.render('index', { requestedURL: req.url });
	}

});

var port = process.env.PORT || 3000;
    app.listen(port);