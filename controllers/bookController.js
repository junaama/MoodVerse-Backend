const express = require("express");
const router = express.Router();
const Book = require("../models/books");

//index
router.get("/", async (req, res) => {
    try {
        const books = await Book.find()
        return res.json(books)
    }catch(err){
        console.error(err)
        return res.status(500).send(err.message)
    }
});

module.exports = router;