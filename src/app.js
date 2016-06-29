var express      = require('express');
var exphbs       = require('express-handlebars');
// var path         = require('path');
// var logger       = require('morgan');
// var bodyParser   = require('body-parser');
// var cookieParser = require('cookie-parser');
var mongoose     = require('mongoose');
// var exjwt        = require('express-jwt');
// var jwt          = require('jsonwebtoken');
// var passport     = require('passport');
// var bcrypt       = require('bcrypt');
var app          = express();
var router       = express.Router();

// Mongoose setup
mongoose.connect('mongodb://localhost:27017/');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

// Middleware
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(logger('dev'));
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);