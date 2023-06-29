import React from 'react';
import TodoItem from './TodoItem';
import ITodo from '../types/data';

interface ITodoListProps {
  items: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = ({items}) => {
  return (
    <div>
      {
        items.map(todo => <TodoItem key={todo.id} {...todo} />)
      }
    </div>
  )
};

export default TodoList;