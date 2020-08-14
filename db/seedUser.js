const mongoose = require("./connection.js");
const db = mongoose.connection;
const User = require("../models/user");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await User.deleteMany({});
const admin = [{
    username: "admin",
    email: "admin@test.com",
    password: "p@ssw0rd"
}]
  await User.insertMany(admin);
  console.log("Created some users, yay!");
};

const run = async () => {
  await main();
  db.close();
};

run();
