var mongoose = require('mongoose');

//create schema
var MovieSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	url:{
		type: String,
		required: true
	}
});

//export schema
module.exports = MovieSchema;