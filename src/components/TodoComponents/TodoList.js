import React from 'react';
import './Todo.css'
import Todo from './Todo'


const TodoList = (props) => {
  return(
    <div className="list-box">
      {props.todoItems.map(item => {
        return (
          <Todo
            editButton={() => props.editButton(item.id)}
            editChange={props.editChange}
            markComplete={() => props.markComplete(item.id)}
            editItem={() => props.editItem(item.id)}
            todoItem={item} 
          />
        )
      })}
    </div>
  )
}

export default TodoList;