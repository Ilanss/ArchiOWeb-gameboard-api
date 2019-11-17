const express = require('express');
const utils = require('./utils');
const router = express.Router();
//controllers
const File = require('../db/models/User');
const User = File.User;
const Game = require('../db/models/Game');

router.post('/reset', utils.authenticate, function(req, res, next) {
  removeAll().then(() => res.sendStatus(204)).catch(next);
});

function removeAll() {
  return Game.remove({}).then(() => User.remove({}));
}

module.exports = router;
