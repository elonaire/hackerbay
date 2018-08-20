const jsonpatch = require('jsonpatch');//module to enable patching JSON objects

exports.patch_obj = (req,res,next)=>{
  let initialObj = req.body.obj;//object to be patched
  let patchObj = req.body.patchobj;//patch

  let jsonPatchArray = [
    {op: patchObj.op, path: `/${patchObj.key}`, value: patchObj.value}
  ];

  if (initialObj && patchObj) {
    if (patchObj.op!=='replace' && patchObj.op!=='add' && patchObj.op!=='remove') {
      res.status(400).json({
        message: "Only 'add', 'replace', and 'remove' are the accepted patch operations"
      });
    }else {
      let patchedObj = jsonpatch.apply_patch(initialObj, jsonPatchArray);
      res.status(200).json({
        message: "Patch Successful",
        initialObj: initialObj,
        jsonPatchArray: jsonPatchArray,
        patchedObj: patchedObj
      });
    }
  }else{
    res.status(400).json({
      message: "Body must contain a JSON object and a JSON patch object"
    })
  }
}
