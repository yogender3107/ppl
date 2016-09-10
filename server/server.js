var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var user = require("./routes/user");
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var morgan       = require('morgan');
var session      = require('express-session');
/*var post = require("./routes/post");
var category = require("./routes/category");
var upload = require("./routes/upload");*/

var port = process.env.port || 8888;
require('./config/passport')(passport);

app.use(express.static('public'));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

/*xxxxxxxxx  allowing req from  localhost:3000xxxxxxxxxxxxxxxxxxxxx*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
/*xxxxxxxxx  allowing req from  localhost:3000xxxxxxxxxxxxxxxxxxxxx*/

app.get("/", function(req, res) {
    res.send("hello demo...getrequest");
});

app.post("/", function(req, res) {
    res.send("in post " + req.body.name);
});

// routes ======================================================================
require('./routes/user.js')(app, passport); // load our routes and pass in our app and fully configured passport

/*app.use("/post", post);
app.use("/category", category);
app.use("/upload", upload);*/

app.listen(port, function() {
    console.log("connected to server :"+port);
});