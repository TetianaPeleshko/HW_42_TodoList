import { useState } from 'react';

import './todo-list.css';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      return; // Якщо інпут порожній, не додаємо нову тудушку
    }

    const newTodos = [...todos, { text: newTodo, completed: false }];
    setTodos(newTodos);
    setNewTodo('');
  };

  return (
    <div className="todo-list-container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
              className="todo-checkbox"
            />
            <span
              className="todo-span"
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="input-section">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">
          Add todo
        </button>
      </div>
    </div>
  );
}
