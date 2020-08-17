const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const userController = require("./controllers/userController");
// const passport = require("passport")
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const versesController = require("./controllers/versesController");
const bookController = require('./controllers/bookController')
//cors
const corsOptions = {
  origin: 'https://moodverse.netlify.app'
}
app.use(cors(corsOptions));
app.options('*', cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json());



// Routes
app.use("/api/users", userController);
app.use("/verses", versesController);
app.use("/api/books", bookController)
// app.set("port", process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
