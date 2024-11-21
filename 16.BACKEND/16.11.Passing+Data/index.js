import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs', {
    title: 'Enter your name below'
  })
});

app.post("/submit", (req, res) => {
  const fname = req.body.fName.length
  const lname = req.body.lName.length
  const totalLetras = fname + lname
  res.render('index.ejs', {
    title: `Seu nome tem ${totalLetras} letras`
  })
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
