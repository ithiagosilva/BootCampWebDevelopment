import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "new_password",
  port: 5432
});
db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  try {
    const result = await db.query('SELECT email FROM users WHERE email = $1', [username]);
    const checkEmail = result.rows
    if(checkEmail.length > 0) {
      res.send('EMAIL ALREADY REGISTERED');
    } else {
      try {
        await db.query('INSERT INTO users (email, password) VALUES ($1, $2)', [username, password]);
        res.render('secrets.ejs');
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error)
  }  
});

app.post("/login", async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  try {
    const result = await db.query("SELECT email FROM users WHERE email = $1 AND password = $2", [username, password])
    const userCheck = result.rows
    if(userCheck.length > 0) {
      res.render('secrets.ejs')
    } else {
      res.send('EMAIL OU SENHA INCORRETOS')
    }
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
