var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/users/:id', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/games', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/games/:id', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/users/:id/collections', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/users/:id/collections/:id', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/users/:id/collections/:id/games', function(req, res, next) {
    res.send('respond with a resource');
});

/* POST users listing. */
router.post('/users', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/games', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/users/:id/collections', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/users/:id/collections/:id/games', function(req, res, next) {
    res.send('respond with a resource');
});

/* PATCH users listing. */
router.patch('/users/:id', function(req, res, next) {
    res.send('respond with a resource');
});
router.patch('/games/:id', function(req, res, next) {
    res.send('respond with a resource');
});
router.patch('/users/:id/collections/:id', function(req, res, next) {
    res.send('respond with a resource');
});

/* DELATE users listing. */
router.delete('/users/:id', function(req, res, next) {
    res.send('respond with a resource');
});
router.delete('/games/:id', function(req, res, next) {
    res.send('respond with a resource');
});
router.delete('/users/:id/collections/:id', function(req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;