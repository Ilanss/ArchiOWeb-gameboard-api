/**
 * Responds with 415 Unsupported Media Type if the request does not have the Content-Type application/json.
 */
exports.requireJson = function(req, res, next) {
    if (req.is('application/json')) {
        return next();
    }

    const error = new Error('This resource only has an application/json representation');
    error.status = 415; // 415 Unsupported Media Type
    next(error);
};

/**
 * Returns true if the specified property is among the "include" URL query parameters sent by the client
 */
exports.responseShouldInclude = function(req, property) {
    // Get the "include" URL query parameter
    let propertiesToInclude = req.query.include;
    if (!propertiesToInclude) {
        return false;
    }

    // If it's not an array, wrap it into an array
    if (!Array.isArray(propertiesToInclude)) {
        propertiesToInclude = [propertiesToInclude];
    }

    // Check whether the property is inside the array
    return propertiesToInclude.indexOf(property) >= 0;
};