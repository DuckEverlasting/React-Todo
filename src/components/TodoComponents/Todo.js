import React from 'react';
import './Todo.css'
const Todo = (props) => {

  const listItemClassHandler = () => {
    return (props.todoItem.completed ? "todo-item selected" : "todo-item")
  }

  const editFieldClassHandler = () => {
    return (props.todoItem.editActive ? "edit-field visible" : "edit-field")
  }

  return(
    <div className="todo-item-div">
      <p 
        className={listItemClassHandler()}
        onClick={props.markComplete}
      >
        <input
          className={editFieldClassHandler()}
          size={props.todoItem.task.length}
          type="text"
          placeholder={props.todoItem.task}
          onChange={props.editChange}
        />
        {props.todoItem.task}
      </p>

      <button
        onClick={props.editButton}
      >
        edit
      </button>
    </div>
  )
}

export default Todo;