var mongoose = require('mongoose');

var category = mongoose.Schema({
	cname : {
		type:String,
		required:true,
		unique: true
	},
	description : String,
	image : {
		type: String,
		required : true
	}
});

module.exports = mongoose.model("categorydbs",category);