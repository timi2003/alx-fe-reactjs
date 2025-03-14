import { useState } from 'react'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id? {...todo, completed:!todo.completed } : todo,
      ),
    )
  }
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id))
  }

  return (
    <>
     <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      textAlign: "center" 
    }}>
    <h1>TODO APP</h1>
    <div style={{ width: "300px" }}>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
    </div>
     
    </>
  )
}

export default App;
