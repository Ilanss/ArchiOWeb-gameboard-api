var Games = require('../db/models/Game');

// Display games index form on GET.
exports.games_list = function(req, res) {
    res.json({ test: 'List of games' });
};
// Display the game with selected index on GET.
exports.game_get_info = function(req, res) {
    res.send('NOT IMPLEMENTED: Game info');
};
// Add a new game on POST
exports.game_post_add = function(req, res) {
    res.send('NOT IMPLEMENTED: Add new game');
};
// Edit exsisting game on PATCH
exports.game_patch_edit = function(req, res) {
    res.send('NOT IMPLEMENTED: Edit a game');
};
// Delate selected game on DELATE
exports.game_delate = function(req, res) {
    res.send('NOT IMPLEMENTED: Delate selected game');
};