const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  try{
    const token = req.headers['authorization'].split(" ")[1];
    const decoded = jwt.verify(token, "hackerbayinterview");
    next();
  }catch(error){
    return res.status(403).json({
      message: "Forbidden Request"
    });
  }
}
