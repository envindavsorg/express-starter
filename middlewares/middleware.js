const async = require('async');
const compression = require('compression');

const getDate = async (req, res, next) => {
    const date = new Date();
    const year = date.getFullYear();

    res.locals.year = year;

    next();
};

const runParallel = (middlewares) => (req, res, next) => {
    async.each(middlewares, (mw, cb) => {
        mw(req, res, cb);
    }, next);
};

const global = async (req, res, next) => {
    const stringify = (obj) => {
        const result = JSON.stringify(obj).replace(/"/g, '\\"')
            .replace(/\\r/g, '\\\\r')
            .replace(/\\n/g, '\\\\n')
            .replace(/'/g, '\\\'');
        return result;
    };

    res.locals.stringify = stringify;

    next();
};

module.exports = {
    getDate,
    runParallel,
    global
};
