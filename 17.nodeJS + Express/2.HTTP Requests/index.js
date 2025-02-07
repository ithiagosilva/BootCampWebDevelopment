import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage</h1>');
});

app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact</h1>
        <p>Address: Av. Street 204, San Francisco<p>`
    )
    
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>About</h1>
        <p>Technology company that makes great softwares.<p>`
    )
    
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log('http://localhost:'+ port);
});
