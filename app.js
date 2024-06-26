require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sessionConfig = require('./src/sessions/sessionConfig');
var seedUsers = require('./src/seeders/userSeeder');
var authRouter = require('./src/routes/auth');
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var connectDB = require('./src/config/database');

// Connect to the database
connectDB();

// Initialize the Express app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessionConfig);

// Uncomment the following line to seed the database
// seedUsers();

// Define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

module.exports = app;
