import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const listaPosts = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/novo-post', (req, res) => {
    res.render('novo-post.ejs');
});

app.post('/postar', (req, res) => {
    const titulo = req.body['titulo']
    const conteudo = req.body['conteudo']
    const post = {
        titulo: titulo,
        conteudo: conteudo
    }
    listaPosts.push(post);
    console.log(listaPosts);
    res.render('index.ejs', {
        listaPosts: listaPosts
    });
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});

