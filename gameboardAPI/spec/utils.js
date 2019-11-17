const File = require('../db/models/User');
const User = File.User;
const Game = require('../db/models/Game');

exports.cleanUpDatabase = async function() {
    await Promise.all([User.deleteMany(), Game.deleteMany()]);
};