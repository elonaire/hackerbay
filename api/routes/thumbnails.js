const express = require('express');
const router = express.Router();

//middleware to protect route
const checkAuth = require('../middleware/check-auth');

//import controller
const thumbnailsController = require('../controllers/thumbnails');

router.post('/', checkAuth, thumbnailsController.create_thumbnail);

module.exports = router;
