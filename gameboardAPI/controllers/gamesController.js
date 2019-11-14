var Game = require('../db/models/Game');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
/**
 * Display games index form on GET.
 */
exports.games_list = function(req, res, next) {
    let query = Game.find().sort('name');
    query.exec(function(err, games) {
        if (err) {
            return next(err);
        }
        req.games = games;
        next();
    });
};
/**
 * Display the game with selected index on GET.
 */
exports.game_get_info = function(req, res, next) {
    const gameId = req.params.idGame;
    //check idGame cast function
    if (!ObjectId.isValid(gameId)) {
        return gameNotFound(res, gameId);
    }
    let query = Game.findById(gameId);
    query.exec(function(err, game) {
        if (err) {
            return next(err);
        } else if (!game) {
            return gameNotFound(res, gameId);
        }
        req.game = game;
        next();
    });
    //res.send('NOT IMPLEMENTED: User info');
};
// Add a new game on POST
exports.game_post_add = function(req, res, next) {
    new Game(req.body).save(function(err, savedGame) {
        if (err) {
            return next(err);
        }

        //debug(`Created game "${savedGame.title}"`);

        res
            .status(201)
            //.set('Location', `${config.baseUrl}/api/gameboard/${savedGame._id}`)
            .send(savedGame);
    });
};
// Edit exsisting game on PATCH
exports.game_patch_edit = function(req, res) {
    res.send('NOT IMPLEMENTED: Edit a game');
};
// Delate selected game on DELATE
exports.game_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Delate selected game');
};

//check if game exist
function gameNotFound(res, gameId) {
    return res.status(404).type('text').send(`No game found with ID ${gameId}`);
}