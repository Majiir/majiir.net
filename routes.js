var Image = require('./models/image.js');

module.exports = exports = function (app, images) {

	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/random', function (req, res) {
		var id = images[Math.floor(Math.random() * images.length)];
		res.redirect('/v/' + id);
	});

	app.get(/^\/v\/(\w+)$/, function (req, res) {
		var id = req.params[0];
		Image.findOne({ id: id }, function (err, image) {
			if (err) { res.send(500); return; }
			if (!image) { res.send(404); return; }
			res.format({
				html: function () {
					res.render('viewer', image);
				},
				json: function () {
					res.json(image);
				},
			});
		});
	});

};
