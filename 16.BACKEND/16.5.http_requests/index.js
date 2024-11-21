import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

app.get('/', (req, res) => {
    res.send('<h1>Hello Word</h1>')
});

app.get('/about', (req, res) => {
    res.send('<h1>Sobre</h1>')
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contato</h1>')
});