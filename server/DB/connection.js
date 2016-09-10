var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.connect('mongodb://127.0.0.1:27017/ppl');

//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});
module.exports=db;