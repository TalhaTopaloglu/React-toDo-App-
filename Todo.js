import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import App from '../../App';

function Todo({todo, toggleComplete, removeTodo}) {
  function handleCheckBoxClick(){
    toggleComplete(todo.id);
  }

  function handleRemoveClick(){
    removeTodo(todo.id);
  }

  return (
    <div className='input-group-text'>
      <input className='form-check-input mt-0' type = "checkbox" onClick={handleCheckBoxClick}/>
      <li style={{textDecoration : todo.completed ? "line-through" : null}}
       className='list-group'
  
      >{todo.task}</li>
      <button onClick={handleRemoveClick} className='btn btn outline primary' id='sil'>X</button>
    </div>
  )
}

export default Todo