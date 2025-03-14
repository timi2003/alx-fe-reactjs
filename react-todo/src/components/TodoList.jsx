import React from 'react';

const TodoList = ({ todos = [], toggleTodo, removeTodo }) => {
  return (
    <div className="task">
      {todos.length === 0 ? (  // ✅ Fixed spelling error
        <p>No tasks added yet!</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <span 
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
