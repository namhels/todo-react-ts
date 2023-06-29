import React from 'react';
import ITodo from '../types/data';

interface ITodoItem extends ITodo {}

const TodoItem: React.FC<ITodoItem> = ({id, title, completed}) => {
  return (
    <div>
      <input type='checkbox' checked={completed} />
      {title}
      <button>delete</button>
    </div>
  )
};

export default TodoItem;