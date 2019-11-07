var Users = require('../db/models/User');

// Display users index form on GET.
exports.users_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Users index');
};
// Display the user with selected index on GET.
exports.user_get_info = function(req, res) {
    res.send('NOT IMPLEMENTED: User info');
};
// Display all collections form User with selected index on GET.
exports.user_get_collectionsList = function(req, res) {
    res.send('NOT IMPLEMENTED: Collections form a user');
};
// Display a collection form User with selected index on GET.
exports.user_get_collection = function(req, res) {
    res.send('NOT IMPLEMENTED: Collection with selected id form a user');
};
// Display all games from selected user'collection on GET.
exports.user_get_collectionGames = function(req, res) {
    res.send('NOT IMPLEMENTED: Games in selected collection');
};