import React from 'react';
import './Todo.css'
const Todo = (props) => {

  const listItemClassHandler = () => {
    return (
      (props.todoItem.completed ? "todo-item selected" : "todo-item")
       + 
      (props.todoItem.editActive ? "" : " visible")
    )
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
        {props.todoItem.task}
      </p>
      <input
          name={props.editName}
          className={editFieldClassHandler()}
          size={props.todoItem.task.length}
          type="text"
          value={props.todoItem.task}
          onChange={props.editChange}
      />
      <button
        onClick={props.editButton}
      >
        edit
      </button>
    </div>
  )
}

export default Todo;