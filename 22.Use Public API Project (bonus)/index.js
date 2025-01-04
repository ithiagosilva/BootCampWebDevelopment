import express from 'express';
import axios from 'axios'
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const api_URL = 'https://v2.jokeapi.dev/joke';

const listImg = [
    'https://t3.ftcdn.net/jpg/00/70/99/52/360_F_70995276_PpmSU4oA3acYTuxuRegibhaQbgml6jqM.jpg',
    'https://thumbs.dreamstime.com/b/smiling-emoji-joke-sign-vector-cartoon-white-background-254396724.jpg',
    'https://img.freepik.com/free-vector/april-fools-day_24908-58355.jpg',
]

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/piada', async (req, res) => {
    try {
        const response = await axios.get(api_URL + '/Any?type=twopart&safe-mode');
        console.log(response.data);
        res.render('index.ejs', {
            joke: response.data,
            jokeImg: listImg[Math.floor(Math.random() * listImg.length)]
        });
    } catch (error) {
        console.error('Erro na requisição: ' + error.message)
        res.status(500);
    }
});

app.listen(port, () => {
    console.log('Sever running on port ' + port + ' At http://localhost:' + port);
});