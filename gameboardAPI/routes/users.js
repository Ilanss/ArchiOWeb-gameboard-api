const express = require('express');
const router = express.Router();
const utils = require('./utils');
const config = require('../config');
//controllers
const users_controller = require('../controllers/usersController');
const games_controller = require('../controllers/gamesController');
const File = require('../db/models/User');
const User = File.User;
const Collection = File.Collection;
const Game = require('../db/models/Game');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/* GET users listing. */

router.get('/users', users_controller.users_list, function(req, res, next) {
    res.send(req.users);
});

/**
 * @api {get} /users/:idUser Get a user's information
 * @apiVersion 1.0.1
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} idUser Unique identifier of the user
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
 * @api {get} /games Get list of games
 * @apiName RetrieveGames
 * @apiGroup Game
 * @apiDescription Retrieves a paginated list of games ordered by name (in alphabetical order).
 *
 * @apiUse GameInResponseBody
 * @apiUse GameIncludes
 *
 * @apiParam (URL query parameters) {String} [directorId] Select only movies directed by the person with the specified ID (this parameter can be given multiple times)
 * @apiParam (URL query parameters) {Number} [rating] Select only movies with the specified rating (exact match)
 * @apiParam (URL query parameters) {Number} [ratedAtLeast] Select only movies with a rating greater than or equal to the specified rating
 * @apiParam (URL query parameters) {Number} [ratedAtMost] Select only movies with a rating lesser than or equal to the specified rating
 *
 * @apiExample Example
 *     GET /games?directorId=58b2926f5e1def0123e97bc0&page=2&pageSize=50 HTTP/1.1
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://evening-meadow-25867.herokuapp.com/api/movies?page=1&pageSize=50&gt;; rel="first prev"
 *
 *     [
 *       {
 *         "id": "58b2926f5e1def0123e97281",
 *         "title": "Die Hard",
 *         "rating": 7.4,
 *         "directorId": "58b2926f5e1def0123e97bc0",
 *         "createdAt": "1988-07-12T00:00:00.000Z"
 *       },
 *       {
 *         "id": "58b2926f5e1def0123e97282",
 *         "title": "Die Hard With a Vengance",
 *         "rating": 8.3,
 *         "directorId": "58b2926f5e1def0123e97bc0",
 *         "createdAt": "1995-05-19T00:00:00.000Z"
 *       }
 *     ]
 */
router.get('/games', games_controller.games_list, function(req, res, next) {
    res.send(req.games);
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
router.get('/games/difficulty/:level', utils.requireJson, function(req, res, next) {
    let query = Game.find().sort('name');
    query = query.where('difficulty').equals(req.params.level);
    query.exec((err, games) => {
        console.log(games);
        if (err) {
            return next(err);
        } else if (games.length == 0) {
            return res.send('No games founds with difficulty: ' + req.params.level);
        }
        res.send(games);
    });
});

/**
 * @api {get} /games/:idGame Get a game's information
 * @apiName GetGame
 * @apiGroup Game
 *
 * @apiParam {Number} idGame Unique identifier of the game
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
 * @apiSuccess {Number} editor.idEditor id of the editor
 * @apiSuccess {String} editor.name name of the editor
 */
router.get('/games/:idGame', games_controller.game_get_info, function(req, res, next) {
    res.send(req.game);
});

router.get('/users/:idUser/collections', users_controller.user_get_collectionsList, function(req, res, next) {
    res.send(req.collections);
});

router.get('/users/:idUser/collections/:idCollection', users_controller.user_get_collection, function(req, res, next) {
    res.send(req.collection);
});

router.get('/users/:idUser/Nrcollections', function(req, res, next) {});

router.get('/users/:idUser/collections/:idCollection/games', users_controller.user_get_collectionGames, function(
    req,
    res,
    next
) {
    let tabGamesId = req.games.map((objectId) => mongoose.Types.ObjectId(objectId.id));
    console.log(tabGamesId);
    // for each games_id --> find info
    Game.find().where('_id').in(tabGamesId).exec((err, gamesWithInfo) => {
        res.send(gamesWithInfo);
    });
});

/* POST users listing. */

/**
             * @api {post} /users Create a user
             * @apiName CreateUser
             * @apiGroup User
             * @apiDescription Registers a new user.
             *
             * @apiUse UserInRequestBody
             * @apiUse UserInResponseBody
             * @apiUse UserValidationError
             * @apiSuccess (Response body) {Number} id A unique identifier for the user generated by the server
             *
             * @apiExample Example
             *     POST /users HTTP/1.1
             *     Content-Type: application/json
             * 
             * {
                "username": "Skyggen",
                "personal_info.firstname": "Adrien",
                "personal_info.lastname": "Chapy",
                "personal_info.mail": "chapy@gmail.com",
                "personal_info.password": "bob12345"
            }
             *
             * @apiSuccessExample 201 Created
             *     HTTP/1.1 201 Created
             *     Content-Type: application/json
             *     Location: https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97281
             *
             *     {
                "personal_info": {
                    "firstname": "Adrien",
                    "lastname": "Chapy",
                    "mail": "chapy@gmail.com",
                    "password": "bob12345"
                },
                "_id": "5dc974f01371a342718d2ab2",
                "username": "Skyggen",
                "createdAt": "2019-11-11T14:49:20.282Z",
                "updatedAt": "2019-11-11T14:49:20.284Z",
                "collections": [],
                "__v": 0
            }
             */
router.post('/users', utils.requireJson, function(req, res, next) {
    new User(req.body).save(function(err, savedUser) {
        if (err) {
            return next(err);
        }

        res.status(201).set('Location', `${config.baseUrl}/api/gameboard/${savedUser._id}`).send(savedUser);
    });
});

/**
             * @api {post} /games Create a game
             * @apiName CreateGame
             * @apiGroup Game
             * @apiDescription Registers a new game.
             *
             * @apiUse GameInRequestBody
             * @apiUse GameInResponseBody
             * @apiUse GameValidationError
             * @apiSuccess (Response body) {Number} id A unique identifier for the user generated by the server
             *
             * @apiExample Example
             *     POST /games HTTP/1.1
             *     Content-Type: application/json
             *      { 
                "name": "Uno",
                "nb_players.min": 2,
                "nb_players.max": 8,
                "play_time": 120,
                "setup_time":5,
                "age.min":8,
                "age.max":99,
                "pictures":[{
                    "link":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG",
                    "name":"masuperphoto",
                    "date": "11.11.2019"
                }],
                "editor.id":"5da47887fe0c041bc418df12",
            "editor.name":"Mattel",
                "difficulty":"easy",
                    "category":"hasard"
            }
             *
             * @apiSuccessExample 201 Created
             *     HTTP/1.1 201 Created
             *     Content-Type: application/json
             *     Location: https://archioweb-gameboardapi.herokuapp.com/games/58b2926f5e1def0123e97281
             *
             *      {
                "nb_players": {
                    "min": 2,
                    "max": 8
                },
                "age": {
                    "min": 8,
                    "max": 99
                },
                "_id": "5dc973c11371a342718d2ab0",
                "name": "Uno",
                "play_time": 120,
                "setup_time": 5,
                "pictures": [
                    {
                        "_id": "5dc973c11371a342718d2ab1",
                        "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG",
                        "name": "masuperphoto",
                        "date": "2019-11-10T23:00:00.000Z"
                    }
                ],
                "difficulty": "easy",
                "category": "hasard",
                "createdAt": "2019-11-11T14:44:17.738Z",
                "updatedAt": "2019-11-11T14:44:17.743Z",
                "__v": 0
            }
             */
router.post('/games', games_controller.game_post_add);

router.post('/users/:idUser/collections', utils.requireJson, function(req, res, next) {
    new Collection(req.body).save(function(err, savedCollection) {
        if (err) {
            return next(err);
        }

        res.status(201).set('Location', `${config.baseUrl}/api/gameboard/${savedCollection._id}`).send(savedCollection);
    });
});

// PATCH section :

router.patch('/users/:idUser/collections/:idCollection/games', users_controller.user_post_addCollectionGame);

/* PATCH users listing. */

/**
            * @api {patch} /users/:idUser Update a user
            * @apiName UpdateUser
            * @apiGroup User
            * @apiDescription Updates a user's data (only the properties found in the request body will be updated).
            * All properties are optional.
            *
            * @apiUse UserIdInUrlPath
            * @apiUse UserInRequestBody
            * @apiUse UserInResponseBody
            * @apiUse UserNotFoundError
            * @apiUse UserValidationError
            *
            * @apiExample Example
            *     PATCH /users/58b2926f5e1def0123e97281 HTTP/1.1
            *     Content-Type: application/json
            *
            *     {
            *       username : "Pipot23"
            *     }
            *
            * @apiSuccessExample 200 OK
            *     HTTP/1.1 200 OK
            *     Content-Type: application/json
            *
            *     {
                {"_id":{"$oid":"5da47304fe0c041bc418df11"},
                "username":"Skyggen",
                "personal_info":
                    {
                        "firstname":"Adrien",
                        "lastname":"Ciampone",
                        "mail":"adrienciampone@gmail.com",
                        "password":"bob12345"
                    },
                "collections":[]

            */
router.patch('/users/:idUser', utils.requireJson, loadUserFromParamsMiddleware, function(req, res, next) {
    // Update properties present in the request body
    if (req.body.username !== undefined) {
        req.user.personal_info.name = req.body.username;
    }
    if (req.body.personal_info.firstname !== undefined) {
        req.user.personal_info.firstname = req.body.personal_info.firstname;
    }
    if (req.body.personal_info.lastname !== undefined) {
        req.user.personal_info.lastname = req.body.personal_info.lastname;
    }

    req.user.save(function(err, savedUser) {
        if (err) {
            return next(err);
        }

        debug(`Updated person "${savedUser.username}"`);
        res.send(savedUser);
    });
});

/**
 * @api {patch} /games/:idGame Update a game
 * @apiName UpdateGame
 * @apiGroup Game
 * @apiDescription Updates a game's data (only the properties found in the request body will be updated).
 * All properties are optional.
 *
 * @apiUse GameIdInUrlPath
 * @apiUse GameInRequestBody
 * @apiUse GameInResponseBody
 * @apiUse GameNotFoundError
 * @apiUse GameValidationError
 *
 * @apiExample Example
 *     PATCH /games/58b2926f5e1def0123e97281 HTTP/1.1
 *     Content-Type: application/json
 *
 *     {
 *       name : "Uno"
 *     }
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *
 *     {
 *       "id": "58b2926f5e1def0123e97281",
 *       "name": "Uno",
 *       "nb_player.min": "2"
 *       "nb_player.max": "8"
 *     }
 */
router.patch('/games/:idGame', games_controller.game_patch_edit);

/**
 * @api {patch} /users/:idUser/collections/:idCollection/:id Update a collection
 * @apiName UpdateCollection
 * @apiGroup Collection
 * @apiDescription Updates a collection's data (only the properties found in the request body will be updated).
 * All properties are optional.
 *
 * @apiUse CollectionIdInUrlPath
 * @apiUse CollectionInRequestBody
 * @apiUse CollectionInResponseBody
 * @apiUse CollectionNotFoundError
 * @apiUse CollectionValidationError
 *
 * @apiExample Example
 *     PATCH /users/58b2926f5e1def0123e97281/collections/58b2926f5e1def0123e97281 HTTP/1.1
 *     Content-Type: application/json
 *
 *     {
 *       name : "Ma super collection"
 *     }
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *
 *     {
 *       "id": "58b2926f5e1def0123e97281",
 *       "name": "Ma super collection",
 *       "link": "masupercollection"
 *     }
 */
router.patch('/users/:idUser/collections/:idCollection', users_controller.user_patch_Collectionedit);

/* DELETE users listing. */

/**
 * @api {delete} /users/:idUser Delete a user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiDescription Permanently deletes a user.
 *
 * @apiUse UserIdInUrlPath
 * @apiUse UserNotFoundError
 *
 * @apiExample Example
 *     DELETE https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97bc0 HTTP/1.1
 *
 * @apiSuccessExample 204 No Content
 *     HTTP/1.1 204 No Content
 */
router.delete('/users/:idUser', users_controller.user_delete);

/**
 * @api {delete} /games/:idGame Delete a game
 * @apiName DeleteGame
 * @apiGroup Game
 * @apiDescription Permanently deletes a game.
 *
 * @apiUse GameIdInUrlPath
 * @apiUse GameNotFoundError
 *
 * @apiExample Example
 *     DELETE https://archioweb-gameboardapi.herokuapp.com/games/58b2926f5e1def0123e97bc0 HTTP/1.1
 *
 * @apiSuccessExample 204 No Content
 *     HTTP/1.1 204 No Content
 */
router.delete('/games/:idGame', games_controller.game_delete);
/**
 * @api {delete} /users/:idUsers/collections/:idCollection Delete a collection
 * @apiName DeleteCollection
 * @apiGroup Collection
 * @apiDescription Permanently deletes a collection.
 *
 * @apiUse CollectionIdInUrlPath
 * @apiUse CollectionNotFoundError
 *
 * @apiExample Example
 *     DELETE https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97bc0/collections/58b2926f5e1def0123e97bc0 HTTP/1.1
 *
 * @apiSuccessExample 204 No Content
 *     HTTP/1.1 204 No Content
 */
router.delete('/users/:idUser/collections/:idCollection', users_controller.user_deleteCollection);

function loadUserFromParamsMiddleware(req, res, next) {
    const userId = req.params._id;
    if (!ObjectId.isValid(userId)) {
        return userNotFound(res, userId);
    }

    User.findById(req.params._id, function(err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            return userNotFound(res, userId);
        }

        req.user = user;
        next();
    });
}

function userNotFound(res, userId) {
    return res.status(404).type('text').send(`No user found with ID ${userId}`);
}

/**Path for ApiDoc */

/**
 * @apiDefine GameIdInUrlPath
 * @apiParam (URL path parameters) {String} idGame The unique identifier of the game to retrieve
 */

/**
 * @apiDefine GameNotFoundError
 *
 * @apiError {Object} 404/NotFound No game was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: text/plain
 *
 *     No game found with ID 58b2926f5e1def0123e97281
 */

/**
 * @apiDefine CollectionIdInUrlPath
 * @apiParam (URL path parameters) {Number} idUser The unique identifier of the user to retrieve
 * @apiParam (URL path parameters) {Number} idCollection The unique identifier of the collection to retrieve
 */

/**
 * @apiDefine CollectionNotFoundError
 *
 * @apiError {Object} 404/NotFound No collection was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: text/plain
 *
 *     No collection found with ID 58b2926f5e1def0123e97281
 */

/**
 * @apiDefine UserIdInUrlPath
 * @apiParam (URL path parameters) {Number} idUser The unique identifier of the user to retrieve
 */

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError {Object} 404/NotFound No user was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: text/plain
 *
 *     No user found with ID 58b2926f5e1def0123e97281
 */

/**
 * @apiDefine CollectionInRequestBody
 * @apiParam (Request body) {String{3..50}} name The name of the collection
 * @apiParam (Request body) {String{3..50}} link Link of the collection
 */

/**
 * @apiDefine CollectionInResponseBody
 * @apiSuccess (Response body) {Number} id The unique identifier of the Collection
 * @apiSuccess (Response body) {String} name The name of the collection
 * @apiSuccess (Response body) {String} link Link of the collection
 */

/**
 * @apiDefine CollectionIncludes
 * @apiParam (URL query parameters) {String} [include] Embed linked resources in the response body:
 * * `"director"` for the movie's director
 */

/**
 * @apiDefine CollectionValidationError
 *
 * @apiError {Object} 422/UnprocessableEntity Some of the collection's properties are invalid
 *
 * @apiErrorExample {json} 422 Unprocessable Entity
 *     HTTP/1.1 422 Unprocessable Entity
 *     Content-Type: application/json
 *
 *     {
 *      
 *     }
 */

/**
 * @apiDefine GameInRequestBody
 * @apiParam (Request body) {String{3..50}} name The name of the game
 * @apiParam (Request body) {String{3..50}} nb_players.min Link of the game
 * @apiParam (Request body) {String{3..50}} nb_players.max Link of the game
 * @apiParam (Request body) {String{3..50}} play_time Link of the game
 * @apiParam (Request body) {String{3..50}} setup_time Link of the game
 * @apiParam (Request body) {Object} age Age proposal for play the game
 * @apiParam (Request body) {Number{1..2}} age.min Link of the game
 * @apiParam (Request body) {Number{1..3}} age.max Link of the game
 * @apiParam (Request body) {Array} pictures Array of pictures of the game
 * @apiParam (Request body) {String{3..50}} pictures.link Link of the picture
 * @apiParam (Request body) {String{3..50}} pictures.name name of the picture
 * @apiParam (Request body) {String{3..12}} pictures.date date of the picture
 * @apiParam (Request body) {Array} editor Editor of the game
 * @apiParam (Request body) {Number} editor.id Id editor of the game
 * @apiParam (Request body) {String{3..30}}} editor.name Id editor of the game
 */

/**
 * @apiDefine GameInResponseBody
 * @apiSuccess (Response body) {Number} id The unique identifier of the game
 * @apiSuccess (Response body) {String} name The name of the game
 */

/**
 * @apiDefine GameIncludes
 * @apiParam (URL query parameters) {String} [include] Embed linked resources in the response body:
 * * `"director"` for the game's director
 */

/**
 * @apiDefine GameValidationError
 *
 * @apiError {Object} 422/UnprocessableEntity Some of the game's properties are invalid
 *
 * @apiErrorExample {json} 422 Unprocessable Entity
 *     HTTP/1.1 422 Unprocessable Entity
 *     Content-Type: application/json
 *
 *     {
 *      
 *     }
 */

/**
 * @apiDefine UserInRequestBody
 * @apiParam (Request body) {String{3..50}} username The username of the user
 * @apiParam (Request body) {Object}personal_info Personal informations of the user
 * @apiParam (Request body) {String{2..50}} personal_info.firstname Firstname of the user
 * @apiParam (Request body) {String{2..50}} personal_info.lastname Lastname of the user
 * @apiParam (Request body) {String{3..50}} personal_info.mail Link of the user
 * @apiParam (Request body) {String{3..50}} personal_info.password Link of the user
 */

/**
 * @apiDefine UserInResponseBody
 * @apiSuccess (Response body) {String} username The username of the user
 * @apiSuccess (Response body) {Date} createdAt The date creation of the user
 * @apiSuccess (Response body) {Date} updatedAt The date update of the user
 * @apiSuccess (Response body) {Array} collections The collection of the user
 * @apiSuccess (Response body) {String} __v The version of the user
 * @apiSuccess (Response body) {Object} personal_info Personal informations of the user
 * @apiSuccess (Response body) {String} personal_info.firstname The firstname of the user
 * @apiSuccess (Response body) {String} personal_info.lastname The lastname of the user
 * @apiSuccess (Response body) {String} personal_info.mail The mail of the user
 * @apiSuccess (Response body) {String} personal_info.password The password of the user
 */

/**
 * @apiDefine UserIncludes
 * @apiParam (URL query parameters) {String} [include] Embed linked resources in the response body:
 * * `"director"` for the game's director
 */

/**
 * @apiDefine UserValidationError
 *
 * @apiError {Object} 422/UnprocessableEntity Some of the game's properties are invalid
 *
 * @apiErrorExample {json} 422 Unprocessable Entity
 *     HTTP/1.1 422 Unprocessable Entity
 *     Content-Type: application/json
 *
 *     {
 *      
 *     }
 */

module.exports = router;