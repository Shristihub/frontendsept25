import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import NewTodoList from './components/NewTodoList'

function App() {

  return (
    <>
     <div>
     <h1>Todo List</h1>
     <TodoList></TodoList>
     </div>

       <div>
     <h1>New Todo List</h1>
     <NewTodoList></NewTodoList>
     </div>
    </>
  )
}

export default App
