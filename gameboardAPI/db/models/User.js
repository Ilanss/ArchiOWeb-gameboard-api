const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js')).catch((err) => {
        console.error('mongoose Error', err);
    });

let UserSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    username: String,
    personal_info: {
        firstname: String,
        lastname: String,
        mail: String,
        password: String
    },
    collections: {
        timestamp: Date,
        idCollection: Number,
        name: String,
        link: String,
        idGame: Number
    }
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

/** @name db.User */
module.exports = mongoose.model('User', UserSchema);