import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="todo-item">
      <span className={`todo-content ${todo.isDone ? 'completed' : ''}`}>{todo.content}</span>
      {todo.isDone ? (
        <button onClick={() => onUpdate(todo.id)}>복구</button>
      ) : (
        <button onClick={() => onUpdate(todo.id)}>완료</button>
      )}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
