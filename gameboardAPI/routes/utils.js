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

/**
 * Middleware that responds with 401 Unauthorized if the client did not sent a bearer authentication token
 * equal to the $AUTH_TOKEN environment variable.
 */
exports.authenticate = function(req, res, next) {
    if (!process.env.AUTH_TOKEN) {
        return res.sendStatus(401);
    }

    const authorizationHeader = req.get('Authorization');
    if (!authorizationHeader) {
        return res.sendStatus(401);
    }

    const match = authorizationHeader.match(/^Bearer +(.+)$/);
    if (!match) {
        return res.sendStatus(401);
    }

    if (match[1] != process.env.AUTH_TOKEN) {
        return res.sendStatus(401);
    }

    jwt.verify(token, secretKey, function(err, payload) {
        if (err) {
            return res.status(401).send('Your token is invalid or has expired');
        } else {
            req.currentUserId = payload.sub;
            next(); // Pass the ID of the authenticated user to the next middleware.
        }
    });
};
