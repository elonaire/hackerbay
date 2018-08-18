const express = require('express');
const router = express.Router();

const Userscontroller = require('../controllers/users');

/* GET users listing.
router.get('/', (req, res, next)=>{
  res.send('respond with a resource');
});*/

router.post('/login', Userscontroller.user_login);

module.exports = router;
