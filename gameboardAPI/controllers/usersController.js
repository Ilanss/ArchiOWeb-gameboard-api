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
// Add a new User on POST
exports.user_post_add = function(req, res) {
    res.send('NOT IMPLEMENTED: Add new User');
};
// Add a new User's collection on POST
exports.user_post_addCollection = function(req, res) {
    res.send("NOT IMPLEMENTED: Add new User's collection");
};
// Add a new  Game in User's collection on POST
exports.user_post_addCollectionGame = function(req, res) {
    res.send("NOT IMPLEMENTED: Add new Game in User's collection");
};
// Edit exsisting user on PATCH
exports.user_patch_edit = function(req, res) {
    res.send('NOT IMPLEMENTED: Edit a exsisting user');
};
// Edit exsisting user on PATCH
exports.user_patch_Collectionedit = function(req, res) {
    res.send("NOT IMPLEMENTED: Edit a exsisting  user's collection");
};
// Delate selected user on DELATE
exports.user_delate = function(req, res) {
    res.send('NOT IMPLEMENTED: Delate selected user');
};
// Delate selected user'collection on DELATE
exports.user_delateCollection = function(req, res) {
    res.send("NOT IMPLEMENTED: Delate selected user's collection");
};