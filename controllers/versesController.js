const express = require("express");
const router = express.Router();
const Verses = require("../models/verses");

//index
router.get("/", async (req, res) => {
    try {
        const verses = await Verses.find()
        return res.json({verses})
    }catch(err){
        console.error(err)
        return res.status(500).send(err.message)
    }
});

// post/create
router.post("/", (req, res) => {
  Verses.create({ name: req.body.VersesName }, (err, model) => {
    if (err) console.log(err);
    else res.send(model);
  });
});
// require the Entry model in this Verses file
// const Entry = require('../models/entries');
// // put/add an Entry to the Verses
// router.put('/:VersesId/addEntries/:id', (req, res) => {
//     //require the Fruit route within
//     Entry.findById(req.params.id, (err, entry) => {
//         if (err) console.log(err)
//         else {
//             Verses.findByIdAndUpdate(
//                 req.params.VersesId,
//                 {
//                     $push: {
//                         entries: entry.id
//                     }
//                 },
//                 (err, model) => {
//                     if (err) console.log(err)
//                     else res.send(model)
//                 }
//             )
//         }
//     })
// });
module.exports = router;
