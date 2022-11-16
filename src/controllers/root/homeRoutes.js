const router = require("express").Router();
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.logged_in,
  });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/map", withAuth, (req, res) => {
  res.render("map", {
    loggedIn: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/map");
    return;
  }

  res.render("login", {
    loggedIn: req.session.logged_in,
  });
});

router.get("/dashboard", withAuth, (req, res) => {
  res.render("/dashboard");
});

router.get("/map", withAuth, (req, res) => {
  res.render("map");
});

module.exports = router;
