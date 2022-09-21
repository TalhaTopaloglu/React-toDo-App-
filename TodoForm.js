import React, { useState } from 'react';
import uuid from "react-uuid"

function TodoForm( {addTodo} ) {
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    })

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault(console.log("ekleme işlemi yapıldı"));
        if(todo.task){
            addTodo({...todo, id: uuid()})
            setTodo({...todo, task:""})
        }
    }



  return (
    <form onSubmit={handleSubmit}>
        <input
          name='task'
          type='text'
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default TodoForm