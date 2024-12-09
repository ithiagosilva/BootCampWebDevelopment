import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(emojipediaItem) {
  return (
    <Entry
    key={emojipediaItem.id}
    name={emojipediaItem.name}
    emoji={emojipediaItem.emoji}
    meaning={emojipediaItem.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
