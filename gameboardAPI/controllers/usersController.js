const File = require('../db/models/User');
const User = File.User;
const Collection = File.Collection;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
/**
 * Display users index form on GET.
 */
exports.users_list = function(req, res, next) {
    User.find().sort('personal_info.firstname').exec(function(err, users) {
        if (err) {
            return next(err);
        }
        req.users = users;
        next();
    });
    //res.send('NOT IMPLEMENTED: Users index');
};
/**
 * Display the user with selected index on GET.
 */
exports.user_get_info = function(req, res, next) {
    const userId = req.params.idUser;
    //check id cast function
    if (!ObjectId.isValid(userId)) {
        return userNotFound(res, userId);
    }
    let query = User.findById(userId);
    query.exec(function(err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            return userNotFound(res, userId);
        }
        req.user = user;
        next();
    });
    //res.send('NOT IMPLEMENTED: User info');
};
/**
 * Display all collections form User with selected index on GET.
 */
exports.user_get_collectionsList = function(req, res, next) {
    const userId = req.params.idUser;
    //check id cast function
    if (!ObjectId.isValid(userId)) {
        return userNotFound(res, userId);
    }
    let query = User.findById(userId).select('collections').sort('name');

    query.exec(function(err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            return userNotFound(res, userId);
            //check if user has a collection
        } else if (user.collections == 0) {
            return collectionsNotFound(res, userId);
        }
        req.collections = user.collections;
        next();
    });
    //res.send('NOT IMPLEMENTED: Collections form a user');
};
/**
 * Display a collection form User with selected index on GET.
 */
exports.user_get_collection = function(req, res, next) {
    const userId = req.params.idUser;
    const collectionId = req.params.idCollection;
    //check id cast function
    if (!ObjectId.isValid(userId)) {
        return userNotFound(res, userId);
    }
    /*check collectionId cast function
    if (!ObjectId.isValid(collectionId)) {
        return collectionNotFound(res, collectionId);
    } */
    let query = User.findById(userId).select('collections');
    query.exec(function(err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            return userNotFound(res, userId);
            //check if user has a collection
        } else if (user.collections == 0) {
            return collectionsNotFound(res, userId);
        }
        //export al collections but not only the selected
        req.collection = user.collections.find((collection) => collection._id.toString() == collectionId);
        next();
    });
    //res.send('NOT IMPLEMENTED: Collection with selected id form a user');
};
// Display all games from selected user'collection on GET.
exports.user_get_collectionGames = function(req, res, next) {
    const userId = req.params.idUser;
    const collectionId = req.params.idCollection;
    //check id cast function
    if (!ObjectId.isValid(userId)) {
        return userNotFound(res, userId);
    }
    /*check collectionId cast function
    if (!ObjectId.isValid(collectionId)) {
        return collectionNotFound(res, collectionId);
    } */
    let query = User.findById(userId).select('collections');
    query.exec(function(err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            return userNotFound(res, userId);
            //check if user has a collection
        } else if (user.collections == 0) {
            return collectionsNotFound(res, userId);
        }
        //export al collections but not only the selected
        req.games = user.collections.find((collection) => collection._id.toString() == collectionId).games;
        next();
    });
    //res.send('NOT IMPLEMENTED: Games in selected collection');
};
// Add a new  Game in User's collection on POST
exports.user_post_addCollectionGame = function(req, res) {
    res.send("NOT IMPLEMENTED: Add new Game in User's collection");
};
// Edit existing user on PATCH
exports.user_patch_edit = function(req, res) {
    res.send('NOT IMPLEMENTED: Edit a exsisting user');
};
// Edit existing user on PATCH
exports.user_patch_Collectionedit = function(req, res) {
    res.send("NOT IMPLEMENTED: Edit a exsisting  user's collection");
};
// Delate selected user on DELATE
exports.user_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Delate selected user');
};
// Delate selected user'collection on DELATE
exports.user_deleteCollection = function(req, res) {
    res.send("NOT IMPLEMENTED: Delate selected user's collection");
};

//check if user exist
function userNotFound(res, userId) {
    return res.status(404).type('text').send(`No user found with ID ${userId}`);
}

//check if collections[] = void
function collectionsNotFound(res, userId) {
    return res.status(404).type('text').send(`No collections found for User with ID ${userId}`);
}

//check if colllection exist
function collectionNotFound(res, collectionId) {
    return res.status(404).type('text').send(`No collection found with ID ${collectionId}`);
}
