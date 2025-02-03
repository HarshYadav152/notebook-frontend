import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';

export default function Addnote(props) {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleSaveNote=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        props.showAlert("note has been save","success")
        setNote({title:'',description:'',tag:''})
    }
    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    return (
        <div>
            <div className="container">
                <h2 className='text-center mt-2'>Notebook on the cloud</h2>
            </div>
            <h2>Add you notes</h2>
            <div className='container mb-3 mt-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' id="title" placeholder="Title of your note" value={note.title} onChange={onchange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name='description' rows="3" value={note.description} onChange={onchange} minLength={5} required></textarea>
                </div>
                <div>
                    <label htmlFor="tag" className="form-label">Choose tag</label>
                    <input className="form-control" list="datalistOptions" id="tag" name='tag' value={note.tag} placeholder="Type to search..." onChange={onchange} minLength={5} required />
                    <datalist id="datalistOptions">
                        <option value="General" />
                        <option value="Basic" />
                        <option value="Finance" />
                        <option value="Grocery" />
                        <option value="Office" />
                    </datalist>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length < 5} className='btn btn-primary my-2' onClick={handleSaveNote}>Add Note</button>
            </div>
        </div>
    )
}
