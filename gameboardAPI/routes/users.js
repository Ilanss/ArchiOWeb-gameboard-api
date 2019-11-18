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
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET users listing. */
/**
 * @api {get} /users Get list of users
 * @apiName RetrieveUsers
 * @apiGroup User
 * @apiDescription Retrieves list of users.
 *
 * @apiUse UserInResponseBody

 *
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: https://archioweb-gameboardapi.herokuapp.com/games
 *
 *     [
 *       {
        "personal_info": {
            "firstname": "Adrien",
            "lastname": "Chapy",
            "email": "chapy@mail.com",
            "password": "dfsghj4"
        },
        "_id": "5dc96e2756de3a3feca9be58",
        "username": "dfjhjhd",
        "collections": [
            {
                "games": [],
                "_id": "5dc96e2756de3a3feca9be59",
                "name": "Collection",
                "link": "url"
            }
        ],
        "createdAt": "2019-11-11T14:20:23.014Z",
        "updatedAt": "2019-11-11T14:20:23.326Z",
        "__v": 0,
        "created_by": "5dc974f01371a342718d2ab2"
    },
 *       {
        "personal_info": {
            "firstname": "Bob",
            "lastname": "Robert",
            "email": "Robert@gmail.com",
            "password": "dfsghj4"
        },
        "_id": "5dc96e39669be23ffb3a4269",
        "username": "dfjhjhd",
        "collections": [
            {
                "games": [],
                "_id": "5dc96e39669be23ffb3a426a",
                "name": "Collection",
                "link": "url"
            }
        ],
        "createdAt": "2019-11-11T14:20:41.385Z",
        "updatedAt": "2019-11-11T14:20:41.391Z",
        "__v": 0,
        "created_by": "5dc974f01371a342718d2ab2"
    }
 *     ]
 */
router.get('/users', users_controller.users_list, function(req, res, next) {
    res.send(req.users);
});

/**
 * @api {get} /users/:idUser Get a user's information
 * @apiVersion 1.0.1
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} idUser Unique identifier of the user
 *
 * @apiSuccess {String} username  username of the user
 * @apiSuccess {Object} personal_info  personal info of the user
 * @apiSuccess {String} personal_info.firstname  firstname of the user
 * @apiSuccess {String} personal_info.lastname  lastname of the user
 * @apiSuccess {String} personal_info.email  Email of the user
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
 * @apiDescription Retrieves a paginated list of games ordered by creation date.
 *
 * @apiUse GameInResponseBody
 *
 * @apiParam (URL query parameters) {Number} [page] The page to retrieve (defaults to 1)Ordre de grandeur : 1..
 * @apiParam (URL query parameters) {Number} [pageSize] The number of elements to retrieve in one page (defaults to 100)
 *
 * @apiExample Example
 *     GET https://archioweb-gameboardapi.herokuapp.com/games?page=1&pageSize=10 HTTP/1.1
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://archioweb-gameboardapi.herokuapp.com/games?page=1&pageSize=10&gt;; rel="first prev"
 *
[
    {
        "_id": "5dc96a7ba875243c200fca6a",
        "name": "Shabadabada",
        "createdAt": "2019-11-11T14:04:43.934Z",
        "updatedAt": "2019-11-11T14:04:43.935Z",
        "pictures": [],
        "createdBy":"5dc96a7ba832243c200fca6a",
        "__v": 0
    },
    {
        "nb_players": {
            "min": 2,
            "max": 3
        },
        "age": {
            "min": 8,
            "max": 99
        },
        "_id": "5dcbd9d46c1482b9fd4ce158",
        "name": "Uno",
        "play_time": 120,
        "setup_time": 5,
        "pictures": [
            {
                "_id": "5dcbd9d46c1482b9fd4ce159",
                "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG",
                "name": "masuperphoto",
                "date": "2019-11-10T23:00:00.000Z"
            }
        ],
        "difficulty": "easy",
        "category": "hasard",
        "createdAt": "2019-11-13T10:24:20.004Z",
        "updatedAt": "2019-11-13T10:24:20.018Z",
        "createdBy":"5dc96a7ba832243c200fca6a",
        "__v": 0
    },
    {
        "nb_players": {
            "min": 2,
            "max": 3
        },
        "age": {
            "min": 8,
            "max": 99
        },
        "_id": "5dcbd9df6c1482b9fd4ce15a",
        "name": "Uno",
        "play_time": 120,
        "setup_time": 5,
        "pictures": [
            {
                "_id": "5dcbd9df6c1482b9fd4ce15b",
                "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG",
                "name": "masuperphoto",
                "date": "2019-11-10T23:00:00.000Z"
            }
        ],
        "difficulty": "easy",
        "category": "hasard",
        "createdAt": "2019-11-13T10:24:31.280Z",
        "updatedAt": "2019-11-13T10:24:31.291Z",
        "createdBy":"5dc96a7ba832243c200fca6a",
        "__v": 0
    },
    {
        "nb_players": {
            "min": 2,
            "max": 8
        },
        "age": {
            "min": 8,
            "max": 99
        },
        "_id": "5dc973c11371a342718d2ab0",
        "name": "Uno 2",
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
        "updatedAt": "2019-11-17T14:50:32.724Z",
        "__v": 0,
        "created_by": "5dc974f01371a342718d2ab2"
    },
    {
        "nb_players": {
            "min": 2,
            "max": 3
        },
        "_id": "5dc96b5aa875243c200fca6b",
        "name": "Fantasy",
        "play_time": 120,
        "createdAt": "2019-11-11T14:08:26.784Z",
        "updatedAt": "2019-11-11T14:08:26.785Z",
        "pictures": [],
        "__v": 0,
        "created_by": "5dc974f01371a342718d2ab2"
    },
    {
        "_id": "5dd16d7c7d6ca14f6abf974c",
        "name": "Happy hour",
        "created_by": "testid",
        "createdAt": "2019-11-17T15:55:40.774Z",
        "updatedAt": "2019-11-17T15:55:40.793Z",
        "pictures": [],
        "__v": 0,
        "created_by": "5dc974f01371a342718d2ab2"
    },
    {
        "_id": "5dd16d9df340254fd6f3821a",
        "name": "MotDingo",
        "created_by": "testid",
        "createdAt": "2019-11-17T15:56:13.055Z",
        "updatedAt": "2019-11-17T15:56:13.059Z",
        "pictures": [],
        "__v": 0,
        "created_by": "5dc974f01371a342718d2ab2"
    }
]
 */
router.get('/games', games_controller.games_list, function(req, res, next) {
    res.send(req.games);
});

/**
 * @api {get} /games/difficulty/:level Request games by difficulty
 * @apiName GetGameByDifficulty
 * @apiGroup Game
 * @apiParam (Request body) {string} difficulty Get games by difficulty

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
 * @apiSuccess {String} editor.id id of the editor
 * @apiSuccess {String} editor.name name of the editor
 * @apiSuccess {String} createdBy Id of the creator of the game
 */
router.get('/games/difficulty/:level', utils.requireJson, function(req, res, next) {
    let query = Game.find().sort('name');
    query = query.where('difficulty').equals(req.params.level);
    query.exec((err, games) => {
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
 * @apiParam {String} idGame Unique identifier of the game
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
 * @apiSuccess {String} editor.idEditor id of the editor
 * @apiSuccess {String} editor.name name of the editor
 */
router.get('/games/:idGame', games_controller.game_get_info, function(req, res, next) {
    res.send(req.game);
});
/**
 * @api {get} /users/:idUser/collections Get list of collection from a user
 * @apiName RetrieveCollection
 * @apiGroup Collection
 * @apiDescription Retrieves  list of collection from a user.
 *
 * @apiUse CollectionInResponseBody
 *
 * @apiExample Example
 *     GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections HTTP/1.1
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections
 *
[
    {
        "games": [{"id":"5dcbd9d46c1482b9fd4ce158"},{"id":"5dcbd9df6c1482b9fd4ce15a"}],
        "_id": "5dc96e39669be23ffb3a426a",
        "name": "Collection",
        "link": "url"
    },
{
        "games": [{"id":"5dcbd9d46c1482b9fd4ce158"},{"id":"5dcbd9df6c1482b9fd4ce15a"}],
        "_id": "5dc96e39669be23ffb3a426a",
        "name": "Collection2",
        "link": "url"
    }
]
 */
router.get('/users/:idUser/collections', users_controller.user_get_collectionsList, function(req, res, next) {
    res.send(req.collections);
});
/**
 * @api {get} /users/:idUser/collections/:idCollection Get a collection from a user
 * @apiName RetrieveCollection
 * @apiGroup Collection
 * @apiDescription Retrieves  a collection from a user.
 *
 * @apiUse CollectionInResponseBody
 *
 * @apiExample Example
 *     GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96e39669be23ffb3a426a HTTP/1.1
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96e39669be23ffb3a426a
 *
[
    {
        "games": [{"id":"5dcbd9d46c1482b9fd4ce158"},{"id":"5dcbd9df6c1482b9fd4ce15a"}],
        "_id": "5dc96e39669be23ffb3a426a",
        "name": "Collection",
        "link": "url"
    }
]
 */
router.get('/users/:idUser/collections/:idCollection', users_controller.user_get_collection, function(req, res, next) {
    res.send(req.collection);
});

/**
 * @api {get} /users/:idUser/nbrGames Get a number of game created from a user
 * @apiName getNbrGame
 * @apiGroup Game
 * @apiDescription Get number game from a user.
 *
 * @apiUse UserInResponseBody
 *
 * @apiExample Example
 *     GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/nbrGames HTTP/1.1
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/nbrGames
 *
"The users has created: 3 games"
 */
router.get('/users/:idUser/nbrGames', async function(req, res, next) {
    const userId = req.params.idUser;
    let gamesByUser = await Game.aggregate([{
        $match: { createdBy: userId }
    }]);
    return res.json('The users has created: ' + gamesByUser.length + ' games');
});
/**
 * @api {get} /users/:idUser/collections/:idCollection/games Get game from a user collection
 * @apiName getGameFromCollection
 * @apiGroup Collection
 * @apiDescription Get game from a collection.
 *
 * @apiUse CollectionInResponseBody
 *
 * @apiExample Example
 *     GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96b5aa875243c200fca6b/games HTTP/1.1
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96b5aa875243c200fca6b/games
 *
[{"id":"5dcbd9d46c1482b9fd4ce158"},{"id":"5dcbd9df6c1482b9fd4ce15a"}]
 */
router.get('/users/:idUser/collections/:idCollection/games', users_controller.user_get_collectionGames, function(
    req,
    res,
    next
) {
    let tabGamesId = req.games.map((objectId) => mongoose.Types.ObjectId(objectId.id));
    // for each games_id --> find info
    Game.find().where('_id').in(tabGamesId).exec((err, gamesWithInfo) => {
        res.send(gamesWithInfo);
    });
});

/* POST users listing. */

/**
 * @api {post} /register Register a user
 * @apiName Register
 * @apiGroup User
 * @apiParam (Request body) {username {3-20}} username Username of the new user
 * @apiParam (Request body) {email} email Email of the new user
 * @apiParam (Request body) {string} password Password of the new user
 *
 * @apiSuccess {object[]} username  The newly created user
 * @apiExample Example
             *     POST /users HTTP/1.1
             *     Content-Type: application/json
             *
             * {
             * "username": "Skyggen",
             * "personal_info" :{
             * "firstname": "Adrien",
             * "lastname": "Chapy",
             * "email": "chapy@gmail.com",
             * "password": "bob12345"}
             * }
 * @apiSuccessExample 201 Created
             *     HTTP/1.1 201 Created
             *     Content-Type: application/json
             *     Location: https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97281
             *{
    "_id": "5dd1489bc6313335a99f65fb",
    "username": "Skyggen",
    "personal_info": {
        "firstname": "Adrien",
        "lastname": "Chapy",
        "email": "chapy@gmail.com",
        "password": "$2b$10$aQwmXHdxHpWmFHBye48WiOpHHS9HtkTliNVx/dCH1zAWitIrV8YC6"
    },
    "createdAt": "2019-11-17T13:18:19.959Z",
    "updatedAt": "2019-11-17T13:18:19.967Z",
    "collections": [],
    "__v": 0
}
 *
 * @apiError 422 Wrong request
 * @apiErrorExample 422:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
    "message": "users validation failed: email: Path `email` is required., name: Path `name` is required., password: Path `password` is required.",
    "errors": {
        "email": {
            "message": "Path `email` is required.",
            "username": "ValidatorError",
            "properties": {
                "message": "Path `email` is required.",
                "type": "required",
                "path": "email"
            },
            "kind": "required",
            "path": "email",
            "$isValidatorError": true
        },
        "name": {
            "message": "Path `username` is required.",
            "username": "ValidatorError",
            "properties": {
                "message": "Path `username` is required.",
                "type": "required",
                "path": "username"
            },
            "kind": "required",
            "path": "username",
            "$isValidatorError": true
        },
        "password": {
            "message": "Path `password` is required.",
            "username": "ValidatorError",
            "properties": {
                "message": "Path `password` is required.",
                "type": "required",
                "path": "password"
            },
            "kind": "required",
            "path": "password",
            "$isValidatorError": true
        }
    }
}
 *
 *
 */
router.post('/register', function(req, res, next) {
    // Create a new document from the JSON in the request body
    let newUser = req.body;
    newUser.registrationDate = Date.now();
    bcrypt.hash(newUser.personal_info.password, saltRounds, function(err, hash) {
        newUser.personal_info.password = hash;
        const newUserDocument = new User(newUser);
        // Save that document
        newUserDocument.save(function(err, savedUser) {
            if (err) {
                return next(err);
            }
            // Send the saved document in the response
            res.status(201).set('Location', `${config.baseUrl}/api/gameboard/${savedUser._id}`).send(savedUser);
        });
    });
});

/**
 * @api {post} /login Login a user
 * @apiName Log-in
 * @apiGroup User
 * @apiParam (Request body) {email} email Email credentials of the user trying to login
 * @apiParam (Request body) {string} password Password of the user trying to login
 *
 * @apiSuccess {token[]} jwt  A json web token that must be sent with every request to identify the user
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     Content-Type: application/json; charset=utf-8
 *
 * {
 *   "token": "eyJhbGciOiJIUsadwiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YmM0NWZiNTE4ODA1YTNwqDcxMTQ4NWYiLCJleHAiOjE1NDE0MDcxMTkuMzQ2LCJpYXQiOjE1NDA4MDIzMTkzNDZ9.-x2WD3X6hVU1g-l_7tXIeYPlLOaDAARJPAGPhZlQo6I"
 * }
 *
 * @apiError 404 The email of the User was not found.
 * @apiErrorExample 404:
 *     HTTP/1.1 404 Not Found
 *     Content-Type: application/json; charset=utf-8
 *
 *     {
 *          "status": 404,
 *          "message": "User Not Found"
 *     }
 *
 * @apiError 401 The password of the User is invalid.
 * @apiErrorExample 401:
 *     HTTP/1.1 401 Unauthorized
 *     Content-Type: application/json; charset=utf-8
 *     {
 *          "status": 401,
 *          "message": "invalid password"
 *     }
 */
router.post('/login', function(req, res, next) {
    User.verifyCredentials(req.body.email, req.body.password, function(err, user) {
        if (err) {
            return next(err);
        }
        user.generateJwt(function(err, jwt) {
            if (err) {
                return next(err);
            }
            res.send({ token: jwt, user: user });
        });
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
             * @apiSuccess (Response body) {String} id A unique identifier for the user generated by the server
             *
             * @apiExample Example
             *     POST /games HTTP/1.1
             *     Content-Type: application/json
             *{
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
                "createdBy":"5dc973c23371a342718d2ab1",
                "__v": 0
            }
             */
router.post('/games', utils.authenticate, function(req, res, next) {
    req.body.createdBy = req.currentUserId;
    new Game(req.body).save(function(err, savedGame) {
        if (err) {
            return next(err);
        }

        res.status(201).set('Location', `${config.baseUrl}/api/gameboard/${savedGame._id}`).send(savedGame);
        ws.notifyNewGames(req.body.name);
    });
});

router.post('/users/:idUser/collections', utils.requireJson, function(req, res, next) {
    new Collection(req.body).save(function(err, savedCollection) {
        if (err) {
            return next(err);
        }

        res.status(201).set('Location', `${config.baseUrl}/api/gameboard/${savedCollection._id}`).send(savedCollection);
    });
});

// PATCH section :

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
                        "email":"adrienciampone@gmail.com",
                        "password":"bob12345"
                    },
                "collections":[]

            */
router.patch('/users/:idUser', utils.requireJson, loadUserFromParamsMiddleware, function(req, res, next) {
    // Update properties present in the request body
    if (req.body.username !== undefined) {
        req.user.username = req.body.username;
    }
    //if(req.body.personal_info !== undefined) {

        if (req.body.firstname !== undefined) {
            req.user.personal_info.firstname = req.body.personal_info.firstname;
        }
        if (req.body.lastname !== undefined) {
            req.user.personal_info.lastname = req.body.personal_info.lastname;
        }
        if (req.body.email !== undefined) {
            req.user.personal_info.email = req.body.email;
        }
        if (req.body.password !== undefined) {
            bcrypt.hash(req.body.password, saltRounds, function (err, hashed) {
                req.user.personal_info.password = hashed;
            });
        }

    //}

    req.user.save(function(err, savedUser) {
        if (err) {
            return next(err);
        }

        //debug(`Updated person "${savedUser.username}"`);
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
                "createdBy":"5dc973c23371a342718d2ab1",
                "__v": 0
            }
 */
router.patch('/games/:idGame', utils.requireJson, loadGameFromParamsMiddleware, function(req, res, next) {
    // Update properties present in the request body
    if (req.body.name !== undefined) {
        req.game.name = req.body.name;
    }
    if (req.body.createdBy !== undefined) {
        req.game.createdBy = req.body.createdBy;
    }

    req.game.save(function(err, savedGame) {
        if (err) {
            return next(err);
        }

        //debug(`Updated person "${savedUser.username}"`);
        res.send(savedGame);
    });
});


/**
 * @api {patch} /users/:idUser/collections/:idCollection Update a collection
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
 *       "name" : "Ma super collection"
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
router.patch('/users/:idUser/collections/:idCollection', utils.requireJson, loadUserFromParamsMiddleware, loadCollectionFromParamsMiddleware, function(req, res, next) {
    // Update properties present in the request body
    if (req.body.name !== undefined) {
        req.collection.name = req.body.name;
    }

    req.collection.save(function(err, savedCollection) {
        if (err) {
            return next(err);
        }

        //debug(`Updated person "${savedUser.username}"`);
        res.send(savedCollection);
    });
});

router.patch('/users/:idUser/collections/:idCollection/games',  utils.requireJson, loadUserFromParamsMiddleware, loadCollectionFromParamsMiddleware, function(req, res, next) {
    // Update properties present in the request body
    if (req.body.name !== undefined) {
        req.user.collection.name = req.body.name;
    }

    req.user.save(function(err, savedUser) {
        if (err) {
            return next(err);
        }

        debug(`Updated person "${savedUser.username}"`);
        res.send(savedUser);
    });
});

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
router.delete('/users/:idUser', loadUserFromParamsMiddleware, function(req, res, next) {
    // Check if a game exists before deleting
    /*Game.findOne({ createdBy: req.user.id }).exec(function(err, game) {
        if (err) {
            return next(err);
        } else if (game) {
            // Do not delete if any game is created by this person
            return res.status(409).type('text').send(`Cannot delete user ${req.person.name} because games are created by them`)
        }*/
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        }

        //debug(`Deleted user "${req.user.name}"`);
        res.sendStatus(204);
    });

    //});
});

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
router.delete('/games/:idGame', utils.authenticate, loadGameFromParamsMiddleware, function(req, res, next) {

    if(req.currentUserId = req.game.createdBy) {
        req.game.remove(function (err) {
            if (err) {
                return next(err);
            }

            //debug(`Deleted user "${req.user.name}"`);
            res.sendStatus(204);
        });
    }
    //});
});
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
router.delete('/users/:idUser/collections/:idCollection', loadUserFromParamsMiddleware, loadCollectionFromParamsMiddleware, function(req, res, next) {

    req.collection.remove(function(err) {
        if (err) {
            return next(err);
        }

        //debug(`Deleted user "${req.user.name}"`);
        res.sendStatus(204);
    });
    //});
});

function loadUserFromParamsMiddleware(req, res, next) {
    const userId = req.params.idUser;
    if (!ObjectId.isValid(userId)) {
        return userNotFound(res, userId);
    }

    let query = User.findById(userId);
    query.exec(function(err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            return userNotFound(res, userId);
        }
        req.user = user;
        next();
    });
}

function loadCollectionFromParamsMiddleware(req, res, next) {
    const collectionId = req.params.idCollection;
    if (!ObjectId.isValid(collectionId)) {
        return collectionNotFound(res, collectionId);
    }

    Collection.findById(req.params.idCollection, function(err, collection) {
        if (err) {
            return next(err);
        } else if (!collection) {
            return collectionNotFound(res, collectionId);
        }

        req.collection = collection;
        next();
    });
}

function loadGameFromParamsMiddleware(req, res, next) {
    const gameId = req.params.idGame;
    if (!ObjectId.isValid(gameId)) {
        return gameNotFound(res, gameId);
    }

    Game.findById(req.params.idGame, function(err, game) {
        if (err) {
            return next(err);
        } else if (!game) {
            return gameNotFound(res, gameId);
        }

        req.game = game;
        next();
    });
}

function userNotFound(res, userId) {
    return res.status(404).type('text').send(`No user found with ID ${userId}`);
}

function gameNotFound(res, gameId) {
    return res.status(404).type('text').send(`No game found with ID ${gameId}`);
}

function collectionNotFound(res, collectionId) {
    return res.status(404).type('text').send(`No collection found with ID ${collectionId}`);
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
 * @apiParam (URL path parameters) {String} idUser The unique identifier of the user to retrieve
 * @apiParam (URL path parameters) {String} idCollection The unique identifier of the collection to retrieve
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
 * @apiParam (URL path parameters) {String} idUser The unique identifier of the user to retrieve
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
 */

/**
 * @apiDefine CollectionInResponseBody
 * @apiSuccess (Response body) {String} id The unique identifier of the Collection
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
 * @apiParam (Request body) {Object} nb_players Nb player of the game
 * @apiParam (Request body) {Number{3..50}} nb_players.min min player of the game
 * @apiParam (Request body) {Number{3..50}} nb_players.max max player of the game
 * @apiParam (Request body) {String{3..50}} play_time Play time of the game
 * @apiParam (Request body) {String{3..50}} setup_time setup time of the game
 * @apiParam (Request body) {Object} age Age proposal for play the game
 * @apiParam (Request body) {Number{1..2}} age.min min age of the game
 * @apiParam (Request body) {Number{1..3}} age.max max age of the game
 * @apiParam (Request body) {Array} pictures Array of pictures of the game
 * @apiParam (Request body) {String{3..50}} pictures.link Link of the picture
 * @apiParam (Request body) {String{3..50}} pictures.name name of the picture
 * @apiParam (Request body) {String{3..12}} pictures.date date of the picture
 * @apiParam (Request body) {Array} editor Editor of the game
 * @apiParam (Request body) {String} editor.id Id editor of the game
 * @apiParam (Request body) {String{3..30}} editor.name Id editor of the game
 */

/**
 * @apiDefine GameInResponseBody
 * @apiSuccess (Response body) {String} id The unique identifier of the game
 * @apiSuccess (Response body) {String} name The name of the game
 * @apiSuccess (Response body) {Object} nb_players Nb player of the game
 * @apiSuccess (Response body) {Number} nb_players.min min player of the game
 * @apiSuccess (Response body) {Number} nb_players.max max player of the game
 * @apiSuccess (Response body) {String} play_time Play time of the game
 * @apiSuccess (Response body) {String} setup_time setup time of the game
 * @apiSuccess (Response body) {Object} age Age proposal for play the game
 * @apiSuccess (Response body) {Number} age.min min age of the game
 * @apiSuccess (Response body) {Number} age.max max age of the game
 * @apiSuccess (Response body) {Array} pictures Array of pictures of the game
 * @apiSuccess (Response body) {String} pictures.link Link of the picture
 * @apiSuccess (Response body) {String} pictures.name name of the picture
 * @apiSuccess (Response body) {String} pictures.date date of the picture
 * @apiSuccess (Response body) {Array} editor Editor of the game
 * @apiSuccess (Response body) {String} editor.id Id editor of the game
 * @apiSuccess (Response body) {String} editor.name Id editor of the game
 * @apiSuccess (Response body) {String} createdBy Id of the creator of the game
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
 * @apiParam (Request body) {String{3..50}} personal_info.email Link of the user
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
 * @apiSuccess (Response body) {String} personal_info.email The email of the user
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
 */

module.exports = router;
