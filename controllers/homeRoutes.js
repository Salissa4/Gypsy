const router = require('express').Router();

router.get('/', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('homepage');
});

router.get('/signup', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signup');
});

router.get('/map', (req, res) => {
  res.render('map');
});

router.get('/profile', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('profile');
});

module.exports = router;
