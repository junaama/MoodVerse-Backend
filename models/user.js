const mongoose = require("../db/connection.js");
// Requires mongoose variable exported from the connection.js file
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
//   songs: { type: String, required: true },
//   verses: [
//     {
//       ref: "Verses",
//       type: mongoose.Schema.Types.ObjectId,
//     },
//   ],
});
// userSchema.methods = {
//     checkPassword: function (inputPassword){
//         return bcrypt.compareSync(inputPassword, this.password)
//     },
//     hashPassword: plainTextPassword => {
//         return bcrypt.hashSync(plainTextPassword, 10)
//     }
// }
// userSchema.pre('save', function(next){
//     if(!this.password){
//         console.log('models/user/js no password provided')
//         next()
//     }else {
//         console.log('models/user/js hashpass in pre save')
//         this.password = this.hashPassword(this.password)
//         next()
//     }
// })
const User = mongoose.model("User", userSchema);

module.exports = User;
