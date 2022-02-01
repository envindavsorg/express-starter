const router = require('express').Router();

const {
    getRandomUser,
} = require('../../functions/user');

router.get('/', async (req, res) => {
    res.locals.meta = {
        title: 'Username',
        description: 'Get data about a user.',
    };

    try {
        const user = await getRandomUser();

        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.render('pages/user', {
            user: JSON.stringify(user),
        });
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
