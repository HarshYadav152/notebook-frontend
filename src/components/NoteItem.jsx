import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export default function (props) {
    // context for delete note
    const context = useContext(noteContext);
    const {deleteNote} = context;

    const { note,updateNote,showAlert } = props;
    const handleDelete =()=>{ 
        showAlert("Note has been deleted","success");
        deleteNote(note._id)
    }
    const handleEdit =()=>{  
        updateNote(note);
    }
    return (
        <div className='col-md-3 my-3'>
            <div className='mb-3'>
                <div className="card text-center">
                    <div className='mb-2'>
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">{note.tag}</span>
                    </div>
                    <h5 className="card-header">
                        {note.title}
                    </h5>
                    <div className="card-body">
                        <p className="card-text">{note.description}</p>
                        <div className='d-flex justify-content-between'>
                            {/* <i onClick={()=>{updateNote(note)}} className="fa-regular fa-pen-to-square mx-2"></i> */}
                            <i onClick={handleEdit} className="fa-regular fa-pen-to-square mx-2"></i>
                            {/* <i onClick={()=>{deleteNote(note._id)}} className="fa-solid fa-trash mx-2"></i> */}
                            <i onClick={handleDelete} className="fa-solid fa-trash mx-2"></i>
                        </div>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <p className="card-text"><small className="text-body-secondary">Note added : {note.date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
