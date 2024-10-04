import express from "express"
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>Tel: 121354654</h2> <h2>Email: hthaisi@sdsad.com</h2>")
});

app.get("/about", (req, res) => {
    res.send("<p>aladsladsd alsdlsadsladl als ldlasldalsdl sldlalsd lsldlsldsldlsalsdlsal asldlsldlasldls a lsldsalsldsla lsldlsldalsld lsalsldslasdl</p>")
});
