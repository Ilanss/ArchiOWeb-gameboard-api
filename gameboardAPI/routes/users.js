var express = require('express');
var router = express.Router();
//controllers
var users_controller = require('../controllers/usersController');
var games_controller = require('../controllers/gamesController');

/* GET users listing. */

router.get('/users', users_controller.users_list);
/**
 * @api {get} /users/:id Request a user's information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Unique identifier of the user
 *
 * @apiSuccess {String} username  username of the user
 * @apiSuccess {Object} personal_info  personal info of the user 
 * @apiSuccess {String} personal_info.firstname  firstname of the user
 * @apiSuccess {String} personal_info.lastname  lastname of the user
 * @apiSuccess {String} personal_info.mail  mail of the user
 * @apiSuccess {String} personal_info.password  hash password of the user
 * @apiSuccess {Object[]} collection  Array collection of the user   
 */
router.get('/users/:idUser', users_controller.user_get_info, function(req, res, next) {
    res.send(req.user);
});
/**
 * @api {get} /games Request an array of game's
 * @apiName GetGames
 * @apiGroup Game
 *
 * @apiSuccess {Object[]} games List of games
 * @apiSuccess {String} gameName
 */
router.get('/games', games_controller.games_list);
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
router.get('/games/:idGame', games_controller.game_get_info);
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
router.get('/users/:idUser/collections', users_controller.user_get_collectionsList);
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
router.get('/users/:idUser/collections/:idCollection', users_controller.user_get_collection);
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
router.get('/users/:idUser/collections/:idCollection/games', users_controller.user_get_collectionGames);

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
router.post('/users', users_controller.user_post_add);
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
router.post('/games', games_controller.game_post_add);
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
router.post('/users/:idUser/collections', users_controller.user_post_addCollection);
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
router.post('/users/:idUser/collections/:idCollection/games', users_controller.user_post_addCollectionGame);

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
router.patch('/users/:idUser', users_controller.user_patch_edit);
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
router.patch('/games/:idGame', games_controller.game_patch_edit);
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
router.patch('/users/:idUser/collections/:idCollection', users_controller.user_patch_Collectionedit);

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
router.delete('/users/:idUser', users_controller.user_delate);
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
router.delete('/games/:idGame', games_controller.game_delate);
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
router.delete('/users/:idUser/collections/:idCollection', users_controller.user_delateCollection);

module.exports = router;