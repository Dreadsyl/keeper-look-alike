import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(() => {
      return [...notes, note];
    });
  }

  function deleteNote(id) {
    setNotes(
      notes.filter((note, index) => {
        return index !== id;
      })
    );
  }

  return (
    <>
      <Header />
      <CreateArea sendToApp={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          sendId={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
