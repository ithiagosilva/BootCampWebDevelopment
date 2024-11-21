import express from "express";

const app = express();
const port = 3000;
const diaSemana = new Date().getDay()
let statusSemana = ''
if (diaSemana == 0 || diaSemana == 6) {
    statusSemana = 'a weekend, time to have fun';
} else {
    statusSemana = "the weekday, it's time to work hard!";
};

app.get('/', (req, res) => {
    res.render('index.ejs', {
        semana: statusSemana
    });
});


app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`)
});
