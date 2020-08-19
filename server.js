const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
const logger = require("morgan");
const userController = require("./controllers/userController");
const nodemailer = require('nodemailer')
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const bookController = require('./controllers/bookController')
const verseController = require('./controllers/verseController')
//cors


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json());



// Routes
app.use("/api/users", userController);
app.use("/api/books", bookController)
app.use("/api/verses", verseController)

app.post('/api/send', (req, res)=> {
  let data = req.body
  console.log(data)
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'username',
      pass: 'password'
    }
  })
  let mailOptions = {
    from: data.email,
    to: '0naama0@gmail.com',
    subject: 'Mood Verse Feedback',
    html: `<p>${data.name}</p>
    <p>${data.email}</p>
    <p>${data.message}</p>`
  }
  smtpTransport.sendMail(mailOptions, (err, resp)=> {
    if(err) {
      res.send(err)
    }else {
      res.send('Success')
    }
    smtpTransport.close()
  })
})
app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
