const express = require('express');
const utils = require('./utils');
const router = express.Router();
//controllers
const File = require('../db/models/User');
const User = File.User;
const Game = require('../db/models/Game');


/**
 * @api {post} /reset Reset the API
 * @apiName Reset
 * @apiGroup Admin
 * @apiDescription Permanently deletes users, games & collections.
 *
 * @apiSuccess {json} jwt  API reset by Admin
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *     Content-Type: application/json; charset=utf-8
 *

 *
 * @apiError 405 You are not allowed to reset.
 * @apiErrorExample 405:
 *     HTTP/1.1 405 Unauthorized
 *     Content-Type: application/json; charset=utf-8
 *     {
 *          "status": 405,
 *          "message": "You need to be a Admin"
 *     }
 */
router.post('/reset', utils.authenticate, function(req, res, next) {
  removeAll().then(() => res.sendStatus(204)).catch(next);
});

function removeAll() {
  return Game.remove({}).then(() => User.remove({}));
}

module.exports = router;
