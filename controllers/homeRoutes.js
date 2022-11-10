const router = require("express").Router();
// const { } = require("../models"); // TODO: Import Models

// router.get("/", async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       attributes: ["id", "title", "content", "created_at"],
//       include: [
       // TODO: Implement Map and Marker Models
//       ],
//     });
//     const posts = postData.map((post) => post.get({ plain: true }));

//     res.render("", { // TODO: Implement Handlebars Template
//       posts,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/post/:id", async (req, res) => {
//   try {
//     const postData = await Post.findOne({
//       where: {
//         id: req.params.id,
//       },
      // TODO: Implement Map and Marker Models
//     });

//     const post = postData.get({ plain: true });

//     res.render("", { // TODO: implement handlebars templates
//       ...post,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;