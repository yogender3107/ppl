var user = require("../query/userquery");
var user_data = {};
/*xxxxxxxxxxxxxxxxxxxxx routing xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
module.exports = function(app, passport) {
    app.get("/", function(req, res) {
        res.send("in user...get..router");
    });
    app.post("/", function(req, res) {
        res.send("in user..post...router");
    });

    app.post("/register", function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
                console.log("user",JSON.stringify(user));
                if (err)
                    return res.send(err);
                if (!user) {
                    return res.send("User is already present");
                }
                return res.send(user);
        })(req, res, next);
    });


// process the login form
    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
                if (err) {
                    return res.send(err);
                }
                if (!user) {
                    return res.send("Username and Password didnt match");
                }
                req.logIn(user, function(err) {
                    if (err) {
                        return res.send(err);
                    }
                    return res.send(user);
                });
        })(req, res, next);
    });

    app.post("/addpic", function(req, res) {
        user.addpic(req.body, function(d) {
            res.send(d);
        });
    });

    app.get("/verification/:id/:code", function(req, res) {
        user.verify(req.params.id, req.params.code, function(d) {
            res.send(d);
        });
    });

    app.post("/changepassword", function(req, res) {
        user.changepassword(req.body, function(d) {
            res.send(d);
        });
    });

    app.post("/deletepic", function(req, res) {
        /* fs.existsSync(path)   or   fs.exists(path,callback)  or fs.statSync(path)  or fs.stat(path,callback)  */
        user.deletepic(req.body, function(d) {
            res.send(d);
        });
    });

    app.post("/getuser/:uid", function(req, res) {
        user.find(req.params.uid, function(d) {
            res.send(d);
        });
    });

    app.get("/forgotpassword/:email", function(req, res) {
        user.forgotpassword(req.params.email, function(d) {
            res.send(d);
        });
    });

};
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrouting endxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
