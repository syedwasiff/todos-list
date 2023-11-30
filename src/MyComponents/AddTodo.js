import React, { useState } from 'react'

const AddTodo = (props) => {
    const [text, setText] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!text || !desc) {
            alert("Title or Description can not be empty !");
        }
        else {
            props.addTodo(text, desc);
            setText("");
            setDesc("");
        }
    }
    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="form-control" id="title" aria-describedby="Todo Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
