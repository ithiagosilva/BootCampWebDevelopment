import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'permalist',
  password: 'new_password',
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
const result = await db.query('SELECT * FROM items ORDER BY id ASC')
items = result.rows


app.get("/", (req, res) => {
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  await db.query('INSERT INTO items (title) VALUES ($1)', [item])
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const itemID = parseInt(req.body.updatedItemId);
  const itemTitle = req.body.updatedItemTitle;
  const updatedItem = {
    id: itemID,
    title: itemTitle
  };
  let index = items.findIndex(item => item.id === itemID)
  items[index] = updatedItem;
  await db.query('UPDATE items SET title = $1 WHERE id = $2', [itemTitle, itemID]);
  res.redirect('/');
});

app.post("/delete", async (req, res) => {
  const itemId = parseInt(req.body.deleteItemId);
  const index = items.findIndex(item => item.id === itemId);
  items.splice(index, 1);
  await db.query('DELETE FROM items WHERE id = $1', [itemId]);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
