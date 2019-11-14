const User = require('../db/models/User');

exports.cleanUpDatabase = async function() {
    await Promise.all([User.deleteMany()]);
};