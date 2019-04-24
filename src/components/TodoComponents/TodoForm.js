import React from 'react';
import './Todo.css'

const TodoForm = (props) => {
  return(
    <div>
      <input type="text" placeholder="...todo" value={props.formValue} />
      <button onClick={props.submitButton}>Add Todo</button>
      <button onClick={props.clearButton}>Clear Completed</button>
    </div>
  )
}

export default TodoForm;