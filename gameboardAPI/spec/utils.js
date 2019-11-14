const File = require('../db/models/User');
const User = File.User;

exports.cleanUpDatabase = async function() {
    await Promise.all([User.deleteMany()]);
};
