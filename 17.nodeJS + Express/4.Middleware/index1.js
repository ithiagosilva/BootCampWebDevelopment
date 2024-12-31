import express from "express";
import bodyParser from "body-parser"; // analisador de corpo da requisição
import { dirname } from "path"; // Comes with node, retorna um caminho
import { fileURLToPath } from "url"; // comes with node, converte o caminho obtido
const __dirname = dirname(fileURLToPath(import.meta.url)); // retorna o caminho do arquivo a ser enviado

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
