import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';
const app = express();
const port = 3000;


const db = new pg.Client({
  user: 'postgres',
  password: 'new_password',
  database: 'world',
  host: 'localhost',
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  let countries;
  const result = await db.query('SELECT * FROM visited_country')
  countries = result.rows

  let listOfCountriesCode = []; 
  for (let i = 0; i < countries.length; i++) {
    listOfCountriesCode.push(countries[i].country_code);
  }
  res.render('index.ejs', {
    countries: listOfCountriesCode,
    total: countries.length
  })
  db.end();
  //Write your code here.
});

app.post('/add', async (req, res) => {
  const userTyped = req.body['country'];
  try {
    const queringForCode = await db.query('SELECT country_code FROM countries WHERE country_name = $1', [userTyped]);
    
    if (queringForCode.rows.length === 0) {
      return res.status(404).send('Country not found');
    }
    const codeFromCountryGiven = queringForCode.rows[0].country_code;
    await db.query('INSERT INTO visited_country (country_code) VALUES ($1)', [codeFromCountryGiven]);

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
