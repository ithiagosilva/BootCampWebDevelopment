import React from "react";
import reactDOM from "react-dom";

const name = "Thiago";
const luckNumber = Math.floor(Math.random() * 10);

reactDOM.render(
    <div>
        <h1>Hello {name}</h1>
        <p>Your luck number is {luckNumber}</p>
    </div>, 
    document.getElementById('root')
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
