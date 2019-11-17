const File = require('../db/models/User');
const User = File.User;
const File2 = require('../db/models/Game');
const Game = File2.Game;

exports.cleanUpDatabase = async function() {
    await Promise.all([User.deleteMany(), Game.deleteMany()]);
};