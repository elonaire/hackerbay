const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

const usersRouter = require('./api/routes/users');
const patchRouter = require('./api/routes/jsonpatch');
const thumbnailRouter = require('./api/routes/thumbnails');

const app = express();

app.use(logger('dev'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "hackerbayinterview"
}));

app.use('/users', usersRouter);
app.use('/jsonpatch', patchRouter);
app.use('/thumbnails', thumbnailRouter);

app.use((req,res,next)=>{
	res.status(404).json({
    message: "Resource not found!"
  });
});

app.use((err,req,res,next)=>{
	res.status(500).json({
    message: `Internal server error=> ${err}`
  });
});

module.exports = app;
