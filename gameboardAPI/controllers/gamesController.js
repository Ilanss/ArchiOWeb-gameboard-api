var Games = require('../db/models/Game');

// Display games index form on GET.
exports.games_list = function(req, res) {
    console.log('list of games:');
    res.send('NOT IMPLEMENTED: Game index');
};