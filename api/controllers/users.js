const jwt = require('jsonwebtoken');

exports.user_login = (req,res,next)=>{
  sess = req.session;
  let username = req.body.username;
  let password = req.body.password;

  if(username && password){
    const token = jwt.sign(
      {
        username: username
      },
      "hackerbayinterview",
      {
        expiresIn: "1hr"
      }
    );

    sess.token = token;
    res.status(200).json({
      message: "Login Successful! Welcome " + username
    })
  }else{
    res.status(401).json("You must enter a valid username and password");
  }
}
