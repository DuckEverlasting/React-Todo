import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
          editActive: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
          editActive: false
        }
      ],
      formValue: "",
      editValue: "",
      style: {textDecoration: "line-through"}
    };
  }

  submitButton = ev => {
    ev.preventDefault();
    this.submitForm();
  }

  submitForm = () => {
    if (this.state.formValue === "") {return}
    const newItem = {
      task: this.state.formValue,
      id: Date.now(),
      completed: false,
      editActive: false
    }
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        newItem
      ],
      formValue: ""
    })
  }
  
  formChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  formKeyDown = ev => {
    if (ev.keyCode === 13) {
      this.submitForm()
    }
  }

  markComplete = id => {
    this.setState({
      todoItems: this.state.todoItems.map(el => {
        if (id === el.id) {el.completed = !el.completed}
        return el;
      })
    })
  }

  editButton = id => {
    this.setState({
      todoItems: this.state.todoItems.map(el => {
        if (id === el.id) {el.editActive = !el.editActive}
        return el;
      })
    })
  }

  selectAllButton = ev => {
    ev.preventDefault();

    let allTrueCheck = [];
    allTrueCheck = this.state.todoItems.filter((el) => {
      return (el.completed === false)
    })
    console.log(allTrueCheck);
    
    this.setState({
      todoItems: this.state.todoItems.map(el => {
        el.completed = (allTrueCheck.length !== 0);
        return el;
      })
    })
  }

  clearButton = ev => {
    ev.preventDefault()
    console.log(this.state.todoItems)
    this.setState({
      todoItems: this.state.todoItems.filter(el => {
        return (el.completed === false)
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList
          markComplete={this.markComplete}
          editChange={this.formChange}
          editButton={this.editButton}
          todoItems={this.state.todoItems}
        />
        <TodoForm
          formKeyDown={this.formKeyDown}
          formChange={this.formChange}
          formValue={this.state.formValue}
          submitButton={this.submitButton}
          clearButton={this.clearButton}
          selectAllButton={this.selectAllButton}
        />
      </div>
    );
  }
}

export default App;
