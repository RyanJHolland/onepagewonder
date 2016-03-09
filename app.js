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

/*

app.use(express.static('public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/*', function(req, res) {
	console.log('req to root: ' + req.url);
	res.render(path.join(__dirname, '/public/views/index.html'));
});

app.get('/public/videos/*', function(req, res) {
	console.log('req: ' + req.url);
	res.sendFile(path.join(__dirname, req.url));
});

*/

/*

function indexPage(req, res) {
	var index = path.join(__dirname, '/public/views/index.html');
	console.log('got request to: ' + req.url + '     (full path: ' + path.join(__dirname, req.url) + ')\n');
	res.sendFile(path.join(__dirname, '/public/views/index.html'));
	console.log( 'Sent: ' + index + '\n');
};

function videoInPage(req, res) {
	console.log('got request to: ' + req.url + '     (full path: ' + path.join(__dirname, req.url) + ')\n');
	var data = path.join(__dirname, '/public/videos/', req.params.video);
	res.render(data, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log( 'Sent: ' + data + '\n');
			res.sendFile(data);
		}
	})
};

app.get('/', function(req, res) {
	indexPage(req, res);
});

app.get('/:video', function(req, res) {
	videoInPage(req, res);
});
*/

app.listen(3000, function() {
	console.log('Ryan\'s single-page app listening on port 3000!\n');
})