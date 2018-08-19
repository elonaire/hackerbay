const jwt = require('jsonwebtoken');

exports.user_login = (req,res,next)=>{
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

    res.status(200)
    .set({
      Authorization: "Bearer " + token
    })
    .json({
      message: "Login Successful! Welcome " + username,
      token: token
    })
  }else{
    res.status(401).json("You must enter a valid username and password");
  }
}
