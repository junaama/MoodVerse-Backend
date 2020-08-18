const mongoose = require('../db/connection');

const verseSchema = new mongoose.Schema(
        {
            "versePath": String,
            "content": String,
            "mood": String
        }
    );

const Verse = mongoose.model("Verse", verseSchema)
module.exports = Verse;