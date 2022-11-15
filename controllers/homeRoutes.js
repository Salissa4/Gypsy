const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/map', (req, res) => {
  res.render('map');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', (req, res) => {
  if(req.session.logged_in) {
  res.render('/dashboard');
  }
});

router.get('/map', (req, res) => {
  if (req.session.logged_in) {
  res.render('map');
  }
});

module.exports = router;
