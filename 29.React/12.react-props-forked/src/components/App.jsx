import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name="Beyonce"
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="beyonce"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Peter Parker"
        src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Tom_Holland_Homem-Aranha.jpg"
        alt="peter parker"
        tel="+123 456 789"
        email="p@spiderparker.com"
      />
      <Card
        name="Emma Stone"
        src="https://br.web.img3.acsta.net/pictures/15/05/15/16/30/134942.jpg"
        alt="Emma Stone"
        tel="+123 456 789"
        email="Em@stone.com"
        width="250"
      />
    </div>
  );
}

export default App;
