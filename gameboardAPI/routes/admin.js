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
 * @apiSuccess {json} json  API reset by Admin
  * @apiSuccessExample 204 No Content
 *     HTTP/1.1 204 No Content
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
router.post('/reset', utils.authenticate, function(req, res, next) {
  removeAll().then(() => res.sendStatus(204)).catch(next);
});

function removeAll() {
  return Game.remove({}).then(() => User.remove({}));
}

module.exports = router;
