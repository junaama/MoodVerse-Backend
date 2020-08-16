const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const bookSchema = new Schema(
    {
        "First Psalm": {type: String, },
        "Second Psalm": {type: String, },
        "Old Testament": {type: String, },
        "New Testament": {type: String, },
        "Gospel": {type: String, }
    }
)

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
