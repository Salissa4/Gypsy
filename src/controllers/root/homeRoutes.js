const router = require("express").Router();
const { Marker, User } = require("../../models");
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
  if (req.session.logged_in) {
    res.redirect("/map");
    return;
  }

  res.render("login", {
    loggedIn: req.session.logged_in,
  });
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const allMarkers = await Marker.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "name", "description", "date_created"],
      include: {
        model: User,
        attributes: ["name"],
      },
    });
    const markers = allMarkers.map((marker) => marker.get({ plain: true }));
    console.log(markers);
    res.render("dashboard", {
      markers,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/map", withAuth, (req, res) => {
  res.render("map");
});

module.exports = router;
