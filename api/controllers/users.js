const jwt = require("jsonwebtoken");

exports.get_login = (req, res, next) => {
  res.status(200).json({
    message: "Welcome to Hackerbay. You may login."
  });
};

exports.user_login = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username && password) {
    const token = jwt.sign(
      {
        username: username
      },
      "hackerbayinterview",
      {
        expiresIn: "1hr"
      }
    );

    res.cookie("_token", token, {
      maxAge: 180000
    });

    res.status(200).json({
      message: "Login Successful! Welcome " + username
    });
  } else {
    res.status(401).json("You must provide a valid username and password");
  }
};
