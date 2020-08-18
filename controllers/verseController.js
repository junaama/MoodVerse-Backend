const express = require("express");
const router = express.Router();
const Verse = require("../models/verse");

router.get("/", async (req, res) => {
  try {
    const verses = await Verse.find();
    return res.json({ verses });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const verse = await Verse.findById(req.params.id);
    return res.json({
      versePath: verse.versePath,
      content: verse.content,
      mood: verse.mood,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
});
module.exports = router;
