import React from 'react';
import './Todo.css'
import Todo from './Todo'


const TodoList = (props) => {
  return(
    <div>
      {props.todoItems.map(el => {
        return (
          <Todo todoItem= {el} />
        )
      })}
    </div>
  )
}

export default TodoList;