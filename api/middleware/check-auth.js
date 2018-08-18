const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  try{
    sess = req.session;
    const token = sess.token;
    const decoded = jwt.verify(token, "hackerbayinterview");
    next();
  }catch(error){
    return res.status(403).json({
      message: "Forbidden Request"
    });
  }
}
