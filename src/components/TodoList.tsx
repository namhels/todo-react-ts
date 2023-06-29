import React from 'react';
import TodoItem from './TodoItem';
import ITodo from '../types/data';

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({items, removeTodo, toggleTodo}) => {
  return (
    <div>
      {
        items.map(todo =>
          <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            {...todo}
          />)
      }
    </div>
  )
};

export default TodoList;