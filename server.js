const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const userController = require("./controllers/userController");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const versesController = require("./controllers/versesController");
const bookController = require('./controllers/bookController')
const verseController = require('./controllers/verseController')
//cors
app.use(cors());
app.options('*', cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json());



// Routes
app.use("/api/users", userController);
app.use("/verses", versesController);
app.use("/api/books", bookController)
app.use("/api/verses", verseController)
app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
