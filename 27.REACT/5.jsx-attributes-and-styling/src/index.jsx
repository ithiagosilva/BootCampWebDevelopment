import React from "react";
import ReactDOM from "react-dom";

const ramdomImg = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
      <img className="img-100" src="https://conteudo.imguol.com.br/c/entretenimento/ad/2023/08/11/oqaq---fast-food-todo-dia-1691778325522_v2_1x1.jpg" alt="" />
      <img className="img-100" src="https://www.abilities.ca/wp-content/uploads/2022/04/Food.jpg" alt="" />
      <img className="img-100" src="https://pensamentoverde.com.br/wp-content/uploads/2014/03/img16.jpg" alt="" />
      <img className="img-100" src={ramdomImg + '?grayscale'} />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
