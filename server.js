const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors");
const logger = require("morgan");
const userController = require("./controllers/userController");
const passport = require("passport")

const PORT = process.env.PORT || 3000;
const versesController = require('./controllers/versesController')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json())


app.use("/verses", versesController)

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
// app.use("/api/users", users);
app.use("/api/users", userController);


app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
