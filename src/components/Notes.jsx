import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

export default function Notes(props) {
    const navigate = useNavigate();
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }else{
            navigate("/notebook/login")
        }
    }, [])
    
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        // console.log(currentNote)
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    }
    const handleClick = (e) => {
        console.log("Updating note ....", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Note has been updated successfullly","success")
    }
    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>  
            <Addnote showAlert={props.showAlert} />
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal"></button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" name='etitle' id="etitle" value={note.etitle} placeholder="Title of your note" onChange={onchange} minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="edescription" name='edescription' value={note.edescription} rows="3" onChange={onchange} minLength={5} required ></textarea>
                            </div>
                            <div>
                                <label htmlFor="tag" className="form-label">Choose tag</label>
                                <input className="form-control" list="datalistOptions" id="etag" name='etag' value={note.etag} placeholder="Type to search..." onChange={onchange} minLength={5} required />
                                <datalist id="datalistOptions">
                                    <option value="General" />
                                    <option value="Basic" />
                                    <option value="Finance" />
                                    <option value="Grocery" />
                                    <option value="Office" />
                                </datalist>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5 || note.etag.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <EditNote ref={ref} currentNote={note} updateNote={updateNote}/> */}
            <h2>Retrive your notes</h2>
            <div className='row my-3'>
                <div className="container">
                    {notes.length === 0 && "No notes to display."}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} tag={note.tag} />;
                })}
            </div>
        </>
    )
}