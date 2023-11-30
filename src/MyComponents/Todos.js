import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "40px",
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? <p className='my-3'>No Todos to display</p> : props.todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
        )
      })}

    </div>
  )
}

export default Todos

