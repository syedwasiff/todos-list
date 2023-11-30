import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className='my-3'>
        <h3>{todo.id}: {todo.text}</h3>
        <p>{todo.description}</p>
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
    </>
  )
}

export default TodoItem
