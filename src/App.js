import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='container'>
      <h2 className='title'>Todo App - Redux</h2>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App