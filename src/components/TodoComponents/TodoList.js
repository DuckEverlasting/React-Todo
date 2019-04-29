import React from 'react';
import './Todo.css'
import Todo from './Todo'


const TodoList = (props) => {
  return(
    <div className="todo-list">
      {props.todoItems.map(item => {
        return (
          <Todo
            editButton={() => props.editButton(item.id)}
            editChange={props.editChange}
            editName={item.id}
            markComplete={() => props.markComplete(item.id)}
            todoItem={item} 
          />
        )
      })}
    </div>
  )
}

export default TodoList;