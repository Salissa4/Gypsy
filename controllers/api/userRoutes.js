const router = require('express').Router();
const {User} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.userId =userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch(err) {
        res.status(400).json(err);
    }
});