var mongoose = require('mongoose');
var userdb = require('./user-db');
var categorydb = require('./category-db');

var post = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    postby: { type: mongoose.Schema.Types.ObjectId, ref: 'userdbs', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categorydbs' },
    image: { type: String, required: true },
    comments: [{
        body: { type: String, required: true },
        date: { type: Date, default: Date.now },
        commentby: { type: mongoose.Schema.Types.ObjectId, ref: 'userdbs' }
    }],
    commentcount: { type: Number, default: 0 },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userdbs' }],
    likecount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    viewcount: { type: Number, default: 0 }
});

module.exports = mongoose.model("postdbs", post);
