var express = require('express');
var User = require('../DB/user-db');
var con = require('../DB/connection');
var router = express.Router();
var sendmail = require('../send_mail/sendmail');
var fs = require('fs');

var currentDate = new Date();
var verification_code = Math.floor(Math.random() * 10000);

module.exports = {
    "verify": function(id, code, callback) {
        console.log(id,code);
        User.findOneAndUpdate({ '_id': id, 'local.verification_code': code }, { '$set': { 'local.isverified': true, 'local.verification_code':'' } }, { runValidators: true },
            function(err, data) {
                if (err) callback(err)
                else {
                    if(!(data==undefined)){
                        console.log("object");
                        callback(data);
                    }
                    else
                        callback("already verified or link is incorrect")
                }
            });
    },
    "changepassword": function(user, callback) {
        var opass = user.opass;
        var npass = user.npass;
        var id = user.id;
        userdbs.findOneAndUpdate({ '_id': id, 'local.password': opass }, { '$set': { 'local.password': npass } }, { runValidators: true },
            function(err, data) {
                if (err) callback(err);
                else {
                    data.password = undefined;
                    callback(data);
                }
            });
    },
    "addpic": function(user, callback) {
        User.findOneAndUpdate({ '_id': user.uid }, { $push: { 'local.image': user.image } }, { runValidators: true, new: true },
            function(err, data) {
                if (err) callback(err);
                else {
                    data.password = undefined;
                    callback(data);
                }
            });
    },
    "deletepic": function(user,callback) {
        fs.stat("public" + user.image, function(err, stat) 
        {
            if (err) 
            {
                User.findOneAndUpdate({ '_id': user.uid }, { $pull: { 'local.image': user.image } }, { new: true, runValidators: true },
                    function(e, d) {
                        if (e) callback(e);
                        else {
                            d.password = undefined;
                            callback(d)
                    }
                });
            }
            if (stat) 
            {
                userdbs.findOneAndUpdate({ '_id': user.uid }, { $pull: { 'local.image': user.image } }, { new: true, runValidators: true },
                    function(e, d) {
                        if (e) res.send("error : " + e);
                        else {
                            fs.unlink("public" + user.image, function(er) {
                                if (er) callback(er)
                                else {
                                    d.password = undefined;
                                    callback(d);
                                }
                            });
                        }
                });
            }
        });
    },
    "find":function(id,callback){
        User.findOne({ '_id': req.params.uid }).exec(function(err, data) {
            if (err) callback(err);
            else {
                data.password = undefined;
                callback(data);
            }
        });
    },
    "forgetpassword":function(email){
        User.findOne({ 'local.email': email }).exec(function(err, data) {
            if (err) res.send("err: user doesnot exist..");
            else if (data) {
                var sub = "Forgot Password of PPL"
                var content = "Use this Password to login in PPl.\nYour password of PPL is : " + data.local.password;

                var rs = sendmail(data.email, sub, content);
                if (rs == "error") { console.log("error while sending mail..") } else if (rs == "sent") { console.log("mail is sent.") }
                data.password = undefined;
                res.send(data);
            } else {
                res.send("no user found..");
            }
        });
    }
}
