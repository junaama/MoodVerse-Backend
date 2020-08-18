const express = require("express");
const router = express.Router();
const Verses = require("../models/verses");
require('dotenv').config()
const VERSEID = process.env.VERSE_ID
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
// Verses.aggregate([{"$unwind": "$verses"}, {"$match": {"verses._id": "5f35bdb0a35c9f82bd906303"}}])

//get by individual verse
router.get("/:id", async (req, res)=> {
  try {
    // const verse = await Verses.findById(req.params.id)
    // const verse = await Verses.find({ _id: VERSEID }).elemMatch("empathy", {
    //   _id: req.params.id,
    // });
  //  const verse = await Verses.aggregate([{"$unwind": "$verses"}, {"$match": {"verses._id": req.params.id}}])
  const verses = await Verses.find()
    // verses.map((item)=> {
    //   console.log(item)
    // })
    verses.map((item)=>{
      console.log("item-", item)
    })
    return res.json("hi")
    // return res.json({verse})
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message)
  }
})

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
/*

{
  verse: [
    one: [
      {

      },
      {

      },
      {

      }
    ]
  ]
}

*/