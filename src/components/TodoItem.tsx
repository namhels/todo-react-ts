import React from 'react';
import ITodo from '../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = ({id, title, completed, removeTodo, toggleTodo}) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button
        onClick={() => removeTodo(id)}
      >delete</button>
    </div>
  )
};

export default TodoItem;