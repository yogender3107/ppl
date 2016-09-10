var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
                            'name': {
                                type: String
                            },
                            'password': {
                                type: String,
                                minlength: 6,
                                required: true
                            },
                            'email': {

                                type: String,
                                required: true,
                                unique: true
                            },
                            'image': [String],
                            'isadmin': {
                                type: Boolean,
                                default: false
                            },
                            'isverified': {
                                type: Boolean,
                                default: false
                            },
                            'verification_code': {
                                type: Number
                            }
                        },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('userdbs', userSchema);
