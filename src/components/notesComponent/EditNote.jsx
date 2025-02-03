import React,{forwardRef,useState} from 'react'

const EditNote = forwardRef((props,ref)=>{
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const {currentNote} = props
    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal" style={{ display: 'none' }}>
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" name='etitle' id="etitle" value={currentNote.title} placeholder="Title of your note" onChange={onchange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="edescription" name='edescription' value={currentNote.description} rows="3" onChange={onchange}></textarea>
                            </div>
                            <div>
                                <label htmlFor="tag" className="form-label">Choose tag</label>
                                <input className="form-control" list="datalistOptions" id="etag" name='etag' value={currentNote.tag} placeholder="Type to search..." onChange={onchange} />
                                <datalist id="datalistOptions">
                                    <option value="General" />
                                    <option value="Basic" />
                                    <option value="Finance" />
                                    <option value="Grocery" />
                                    <option value="Office" />
                                </datalist>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default EditNote;