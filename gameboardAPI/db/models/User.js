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
    username: String,
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
            }
        },
        password: String
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

/*UserSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.')*/

/** @name db.User */
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Collection', CollectionSchema);
