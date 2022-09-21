import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


function App() {
  const[todos, setTodos]= useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo =>{
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  function removeTodo (id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <header className='App-header'>
        <p style={{textAlign:"center"}}>todo List</p>
        <TodoForm addTodo = {addTodo}  />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
         />
      </header>
    </div>
  );
}

export default App;
