// List.jsx
import React from 'react';
import './List.css';

function List({ todos, onUpdate, onDelete }) {
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="todo-list-container">
      <div className="todo-section">
        <h2>Working</h2>
        <ul className="todo-list">
          {workingTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div className="todo-content">
                <h3 className="todo-title">{todo.title}</h3>
                <p className="todo-text">{todo.content}</p>
              </div>
              <div className="todo-buttons">
                <button onClick={() => onUpdate(todo.id)} className="complete-button">
                  완료
                </button>
                <button onClick={() => onDelete(todo.id)} className="delete-button">
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="todo-section">
        <h2>Done</h2>
        <ul className="todo-list">
          {doneTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div className="todo-content">
                <h3 className="todo-title done">{todo.title}</h3>
                <p className="todo-text done">{todo.content}</p>
              </div>
              <div className="todo-buttons">
                <button onClick={() => onUpdate(todo.id)} className="restore-button">
                  복구
                </button>
                <button onClick={() => onDelete(todo.id)} className="delete-button">
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
