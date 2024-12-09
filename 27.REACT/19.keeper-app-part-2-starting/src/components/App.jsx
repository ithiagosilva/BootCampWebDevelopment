import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((itemNote) => {
        return (
          <Note
            key={itemNote.key}
            title={itemNote.title}
            content={itemNote.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
