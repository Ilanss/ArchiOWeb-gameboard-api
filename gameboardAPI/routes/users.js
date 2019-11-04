var express = require('express');

var router = express.Router();

/* GET users listing. */
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user 
 */

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user 
 */
router.get('/users/:id', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /games Request an array of game's
 * @apiName GetGames
 * @apiGroup Game
 *
 * @apiSuccess {Object[]} games List of games
 * @apiSuccess {String} gameName
 */
router.get('/games', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /games/:id Request a game's information
 * @apiName GetGame
 * @apiGroup Game
 *
 * @apiParam {Number} id Unique identifier of the game
 *
 * @apiSuccess {String} name name of the game
 * @apiSuccess {Object} nb_players number player of the game
 * @apiSuccess {Number} nb_players.min number min player of the game
 * @apiSuccess {Number} nb_players.max number max player of the game
 * @apiSuccess {Number} play_time Duration party of the game
 * @apiSuccess {Number} setup_time Duration to setup the game
 * @apiSuccess {Object} age range age to play the game
 * @apiSuccess {Number} age.min age min to play the game
 * @apiSuccess {Number} age.max age max to play the game
 * @apiSuccess {String[]} picture array of pictures
 * @apiSuccess {String} difficulty level of difficulty of the game
 * @apiSuccess {String} category category of the game
 * @apiSuccess {Object} editor of the game
 * @apiSuccess {Number} editor.id id of the editor
 * @apiSuccess {String} editor.name name of the editor
 */
router.get('/games/:id', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.get('/users/:id/collections', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.get('/users/:id/collections/:id', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.get('/users/:id/collections/:id/games', function (req, res, next) {
    res.send('respond with a resource');
});

/* POST users listing. */
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.post('/users', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.post('/games', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.post('/users/:id/collections', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.post('/users/:id/collections/:id/games', function (req, res, next) {
    res.send('respond with a resource');
});

/* PATCH users listing. */

/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.patch('/users/:id', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.patch('/games/:id', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.patch('/users/:id/collections/:id', function (req, res, next) {
    res.send('respond with a resource');
});

/* DELATE users listing. */
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.delete('/users/:id', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.delete('/games/:id', function (req, res, next) {
    res.send('respond with a resource');
});
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} firstName First name of the user
 * @apiSuccess {String} lastName  Last name of the user
 */
router.delete('/users/:id/collections/:id', function (req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;