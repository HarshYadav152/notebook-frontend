import React, { useState } from 'react'
import noteContext from './noteContext'

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)

  //Fetch all notes
  const getNotes = async () => {
    // API call remaining
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/notebook/notes/fetchallnote`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const parsedText = await response.json();
    // console.log(parsedText)
    setNotes(parsedText)
  }

  // Add note
  const addNote = async (title, description, tag) => {
    // API call remaining
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/notebook/notes/addnote`, {
      method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    // console.log(note)
    setNotes(notes.concat(note));
  }

  // Delete note
  const deleteNote = async(id) => {
    // API call remaining
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/notebook/notes/deletenote/${id}`, {
      method: 'DELETE', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    alert("Confirm")
    const json = await response.json();
    // console.log(json);
    // console.log("deleting note : ", id)

    const newNote = notes.filter((note) => { return note._id !== id });
    setNotes(newNote);
  }

  // Edit note 
  const editNote = async (id, title, description, tag) => {
    // api call 
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/notebook/notes/updatenote/${id}`, {
      method: 'PUT', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();  
    // console.log(json)
    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;