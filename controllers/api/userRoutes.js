const router = require("express").Router();
const { User } = require("../../models");

// Gets all User Data
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id,
      },
      // TODO: Include Marker and Map models?
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a sequelize session with User data
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post request to login with validation of username
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect Username or Password, please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect Username or Password, please try again! ",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logs user out and destroys user session
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      res.render('homepage');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;