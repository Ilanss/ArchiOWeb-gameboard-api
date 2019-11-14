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
        validate: {
            validator: validateGameTitleUniqueness,
            message : 'Game {VALUE} already exists'
        }
    },
    nb_players: {
        min: {
            type: Number,
            min: 1
        },
        max: {
            type: Number,
            max: 100
        },
        /*validate: {
            validator: validateMaxGreaterThanMin,
            message: 'Max players must be higher than min players'
        },*/
    },
    play_time: {
        type:Number,
        min: 1
    },
    setup_time: {
        type:Number,
        min: 1
    },
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

GameSchema.pre('validate', function (next) {
    if (this.nb_players.min > this.nb_players.max) {
        next(new Error('Max players must be higher than min players'));
    } else if(this.age.min > this.age.max) {
        next(new Error('Max age must be higher than min age'));
    }
    else {
        next();
    }
});

function validateGameTitleUniqueness(value) {
    const GameModel = mongoose.model('Game', GameSchema);
    return GameModel.findOne().where('name').equals(value).exec().then( (existingGame) => {
        return !existingGame || existingGame._id.equals(this._id)
    });
}

/*function validateMaxGreaterThanMin(value) {
    return value.min < value.max;
}*/

/** @name db.Game */
module.exports = mongoose.model('Game', GameSchema);
