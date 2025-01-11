import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "new_password",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [

];

async function getUsers() {
  const queryUsers = await db.query('SELECT * FROM users');
  users = queryUsers.rows;
  return users
}
users = getUsers();

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [currentUserId])
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: result.rows[0].color,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      const user = await db.query("SELECT * FROM users WHERE color = $1", [req.body.add])
      const userID = user.rows[0].id
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, userID]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  if(req.body.add){
    res.render('new.ejs')
  } else {
    currentUserId = req.body.user
    const result = await db.query('SELECT * FROM users WHERE id = $1', [req.body.user])
    const result2 = await db.query('SELECT country_code FROM visited_countries WHERE user_id = $1', [req.body.user])
    const countryVisited = result2.rows.map(cd => cd.country_code);
    console.log(countryVisited)
    res.render('index.ejs', {
      countries: countryVisited,
      users: users,
      color: result.rows[0].color,
      total: countryVisited.length
    })
  }
});

app.post("/new", async (req, res) => {
  const name = req.body.name;
  const color = req.body.color;
  const result = await db.query('INSERT INTO users (name, color) VALUES ($1, $2) RETURNING *', [name, color]);
  console.log(result.rows)
  users.push(result.rows[0])
  currentUserId = result.rows[0].id
  res.render('index.ejs', {
    countries: [],
    users: users,
    color: color,
    total: 0
  })
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
