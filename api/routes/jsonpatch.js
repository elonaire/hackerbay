const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');//middleware to protect route

const patchController = require('../controllers/jsonpatch');

router.patch('/', checkAuth, patchController.patch_obj);

module.exports = router;
