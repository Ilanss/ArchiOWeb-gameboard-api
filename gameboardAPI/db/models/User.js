const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const secretKey = process.env.SECRET_KEY || 'changeme';
const jwt = require('jsonwebtoken');

if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js')).catch((err) => {
        console.error('mongoose Error', err);
    });

let CollectionSchema = new Schema({
    timestamp: Date,
    name: String,
    link: String,
    games: [Object]
});

let UserSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    username: {
        type: String,
        required:true
    },
    personal_info: {
        firstname: {
            type:String,
            minlength: 3
        },
        lastname: {
            type:String,
            minlength: 3
        },
        email: {
            type:String,
            validate: {
                validator: validateEmail,
                message: 'Email is not valid'
            },
            required: true
        },
        password: {
            type:String,
            required: true
        }
    },
    collections: [CollectionSchema]
});

UserSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

UserSchema.pre('update', function() {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

UserSchema.pre('findOneAndUpdate', function() {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

UserSchema.statics.verifyCredentials = function (email, password, callback) {
    User.findOne({email: email}).exec(function (err, user) {
        if (err) {

            return callback(err)
        }
        if (user === null) {
            const err = new Error()
            err.status = 404
            err.message = 'User Not Found'
            return callback(err)
        }

        bcrypt.compare(password, user.personal_info.password, function (err, valid) {
            // Handle error and password validity...
            if (err) {
                return callback(err);
            } else if (!valid) {
                const err = new Error('invalid password')
                err.status = 401
                err.message = 'invalid password '
                return callback(err)
            }

            callback(undefined, user)
        })
    })
}

UserSchema.methods.generateJwt = function (callback) {

    jwt.sign({
            sub: this._id,
            exp: (new Date().getTime() + 7 * 24 * 3600 * 1000) / 1000,
            iat: Date.now(),
        },
        secretKey, function (err, token) {
            if (err) {
                return callback(err)
            }
            return callback(undefined, token)
        })
}


/** @name db.User */
let User = mongoose.model('User',UserSchema);
module.exports = {User:mongoose.model('User', UserSchema),Collection:mongoose.model('Collection', CollectionSchema)};
