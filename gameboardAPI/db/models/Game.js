const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js')).catch((err) => {
        console.error('mongoose Error', err);
    });

let EditorSchema = new Schema({
    name: String
});

let GameSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true,
        /*validate: {
            validator: validateGameTitleUniqueness,
            message : 'Game {VALUE} already exists'
        }*/
    },
    nb_players: {
        min: Number,
        max: Number
    },
    play_time: Number,
    setup_time: Number,
    age: {
        min: Number,
        max: Number
    },
    pictures: [{
            link: String,
            name: String,
            date: Date
        }],
    difficulty: String,
    category: String,
    editor: {EditorSchema},
    skill: String,
    description: String

});

GameSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

GameSchema.pre('update', function() {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

GameSchema.pre('findOneAndUpdate', function() {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

/** @name db.Game */
module.exports = mongoose.model('Game', GameSchema);
