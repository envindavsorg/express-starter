const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const sass = require('@gompa/node-sass-middleware');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const livereload = require('livereload');
const livereloadMiddleware = require('connect-livereload');

dotenv.config({
    path: path.join(__dirname, '.env')
});

const {
    getDate,
    runParallel,
    global
} = require('./middlewares/middleware');

const app = express();

// create a livereload server
const hotServer = livereload.createServer({
    exts: ['pug', 'scss', 'css', 'js']
});

hotServer.watch(__dirname);

app.use(livereloadMiddleware());

// view engine setup
app.set('view engine', 'pug');
app.set('public', (path.join(__dirname, '/public')));

app.locals.pretty = false;
app.locals.basedir = app.get('public');

app.use(sass({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    debug: false,
    outputStyle: 'compressed',
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/')));

app.use(runParallel([
    cookieParser(),
    logger('dev'),
    express.json(),
    cookieParser(),
    express.static(path.join(__dirname, 'public')),
    express.json({ limit: '50mb' }),
    express.urlencoded({ extended: true, limit: '50mb' }),
    getDate,
    global
]));

app.use((req, res, next) => {
    res.removeHeader('Cross-Origin-Resource-Policy');
    res.removeHeader('Cross-Origin-Embedder-Policy');
    next();
});

// router
app.use(require('./routes'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
