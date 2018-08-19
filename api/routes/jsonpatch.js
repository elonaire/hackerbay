const express = require('express');
const router = express.Router();
const jsonpatch = require('jsonpatch');

const checkAuth = require('../middleware/check-auth');

router.patch('/', checkAuth, (req,res,next)=>{
  let jsonObj = req.body.obj;
  let jsonPatchArray = [
    {op: "replace", path: "/name", value: req.body.patchobj.name}
  ];

  if (jsonObj && req.body.patchobj) {
    let patchedObj = jsonpatch.apply_patch(jsonObj, jsonPatchArray);
    res.status(200).json({
      message: "Patch Successful",
      jsonObj: jsonObj,
      jsonPatchArray: jsonPatchArray,
      patchedObj: patchedObj
    });
  }else{
    res.status(400).json({
      message: "Body must contain a JSON object and a JSON patch object"
    })
  }
});

module.exports = router;
