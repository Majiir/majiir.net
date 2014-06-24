var mongoose = require('mongoose');
var validate = require('mongoose-validate');

var imageSchema = new mongoose.Schema({
	id: { type: String, required: true, match: /^[0-9a-zA-Z]+$/, index: true },
	gallery: {
		id: { type: String, required: true, match: /^[0-9a-zA-Z]+$/ },
		name: { type: String, required: true },
	},
	filesize: { type: Number, required: true, min: 0, validate: validate.int },
	extension: { type: String, required: true, match: /^\.[a-z]+$/ },
	size: {
		height: { type: Number, required: true, min: 0, validate: validate.int },
		width: { type: Number, required: true, min: 0, validate: validate.int },
	}
});

module.exports = exports = mongoose.model('Image', imageSchema);
