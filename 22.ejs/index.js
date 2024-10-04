import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;

const d = new Date();
const dia = d.getDay();

function checkSemana (){
    if (dia == 0 || dia == 6) {
        return "the weekend, it's time to have fun!";
    } else {
        return "a weekday, it's time to work hard!";
    }
}

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {
        dia: checkSemana()
    });
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
});
