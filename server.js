var cons = require('consolidate');
var express = require('express');
var mongoose = require('mongoose');
var Image = require('./models/image.js');

mongoose.connect('mongodb://localhost/majiirnet');

var app = express();

app.engine('dust', cons.dust);

app.enable('trust proxy');
app.disable('etag');
app.disable('x-powered-by');
app.set('view engine', 'dust');
app.set('views', __dirname + '/templates');

var images = [];
console.log('Querying image index...');
Image.find({}, { _id: 0, id: 1 }).stream().on('data', function (image) {
	images.push(image.id);
}).on('close', function () {
	console.log('Displaying ' + images.length + ' images.');
});

require('./routes.js')(app, images);

app.listen(3000);
