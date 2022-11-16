const chalk = require("chalk");
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const helpers = require("./utils/helpers");
const config = require("./config");
const sequelize = require("./config/connection");

const app = express();

(async () => {
  // Set up Handlebars.js engine with custom helpers
  const hbs = exphbs.create({ helpers });

  const sessionConfig = {
    secret: config.DB_SECRET,
    cookie: {
      maxAge: 300000,
      httpsOnly: true,
      secure: false,
      sameSite: "strict",
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

  app.use(session(sessionConfig));

  // Inform Express.js on which template engine to use
  app.set("views", path.join(__dirname, "views"));
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));

  app.use(routes);

  try {
    await sequelize.sync({ force: false });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  app.listen(config.PORT, () =>
    console.log(
      chalk.cyanBright(`Listening on http://localhost:${config.PORT}`)
    )
  );
})();
