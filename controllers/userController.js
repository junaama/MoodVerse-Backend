
const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const keys = require("../config/keys");
//load input validation
const validateRegisterInput = require("../validation/register")
const validateLoginInput = require('../validation/login')
//load user model

//register endpoint
router.post("/register", (req, res) => {
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});



//old
/*
router.get("/", async (req, res) => {
    try {
      const users = await User.find();
      return res.json({ users });
    } catch (error) {
      console.log("error");
      return res.status(500).send(error.message);
    }
  });

  router.get("/favorites", async (req, res) => {
    try {
      const favoritedUsers = await User.find({ isFavorite: true });
      return res.json({ favoritedUsers });
    } catch (error) {
      console.log("error");
      return res.status(500).send(error.message);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("User deleted");
      }
      throw new Error("Item not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      console.log(req.body);
      const newUser = await new User(req.body);
      await newUser.save();
      console.log(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });



  router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updated) => {
        if (error) console.log(error);
        else res.send(updated);
      }
    );
  });
  
  router.get("/login", async (req, res) => {
    try {
      const username = req.query.username;
      const password = req.query.password;
  
      const logged_in_user = await User.find({
        username: username,
        password: password,
      });
      console.log("logged_in_user: " + logged_in_user);
      if (logged_in_user) {
        return res.status(200).json(logged_in_user[0]);
      }
      return res.status(404).send("User with the specified ID does not exist");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (user) {
        return res.status(200).json({ user });
      }
      return res.status(404).send("User with the specified ID does not exist");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });
  router.get("/username/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const user = await User.find({username: username});
      if (user) {
        return res.status(200).json({ user });
      }
      return res.status(404).send("User with the specified username does not exist");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });
  */
  module.exports = router;