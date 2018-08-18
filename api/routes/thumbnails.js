const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, (req,res,next)=>{
  res.status(200).json({
    message: "You can generate thumbnail"
  });
});

module.exports = router;
