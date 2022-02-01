const router = require('express').Router();

router.get('/', (req, res) => {
    res.locals.meta = {
        title: 'Express Starter 😇',
        description: 'Express Starter is a boilerplate for Node.js and Express.js.',
    };

    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.render('pages/index');
});

router.use('/user', require('./user/user'));

module.exports = router;
