const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

/** @name db.User */
module.exports = {User:mongoose.model('User', UserSchema),Collection:mongoose.model('Collection', CollectionSchema)};
