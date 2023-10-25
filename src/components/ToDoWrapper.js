import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import {v4 as uuidv4} from 'uuid'

uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log("AGGIUNTO")
  }

  return (

  <div className='TodoWrapper'>
      <h1>Get things done!</h1>
      < ToDoForm addTodo={addTodo} />
      {todos.map((todo) =>
          <ToDo
            key={todo.id}
            task={todo}
          />
        )
      }
    </div>
  )
}

export default ToDoWrapper