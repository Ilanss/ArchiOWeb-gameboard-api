const File = require('../db/models/User');
const User = File.User;
const File2 = require('../db/models/Game');
const Game = File2.Game;

exports.cleanUpUsersDatabase = async function() {
    await Promise.all([User.deleteMany()]);
    await Promise.all([Game.deleteMany()]);
};