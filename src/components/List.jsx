import React from 'react';
import './List.css';
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete }) => {
  return (
    <div className="list">
      <div className="working-section">
        <h2>Working</h2>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
          ))}
      </div>
      <div className="done-section">
        <h2>Done</h2>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
          ))}
      </div>
    </div>
  );
};

export default List;
