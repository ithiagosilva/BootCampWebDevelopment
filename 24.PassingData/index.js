import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

const title = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Enter Your Name"
  });
});

app.post("/submit", (req, res) => {
  const vNumberOfLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {
    title: `Your Name Has ${vNumberOfLetters} Letters`
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
