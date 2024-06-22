require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var seedUsers=require('./src/seeders/userSeeder')
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var connectDB = require('./src/config/database')

connectDB()
//seedUsers()

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
