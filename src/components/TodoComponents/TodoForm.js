import React from 'react';
import './Todo.css'

const TodoForm = (props) => {
  return(
    <div className="todo-form">
      <input 
        name="formValue" 
        className="input-field"
        type="text" 
        placeholder="...todo" 
        value={props.formValue}
        onChange={props.formChange}
        onKeyDown={props.formKeyDown}
      />
      <button onClick={props.submitButton}>Add Todo</button>
      <button onClick={props.clearButton}>Clear Completed</button>
      <button onClick={props.selectAllButton}>Select All</button>
    </div>
  )
}

export default TodoForm;