const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.patch('/', checkAuth, (req,res,next)=>{
  let jsonObj = req.body.obj;
  let jsonPatchObj = req.body.patchobj;

  if (jsonObj && jsonPatchObj) {
    res.status(200).json({
      message: "Patch Successful"
    });
  }else{
    res.status(400).json({
      message: "Body must contain a JSON object and a JSON patch object"
    })
  }
});

module.exports = router;
