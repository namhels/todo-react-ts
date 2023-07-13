import React from 'react';
import TodoItem from './TodoItem';
import ITodo from '../types/data';
import { List } from '@mui/material';

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({items, removeTodo, toggleTodo}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360}}>
      {
        items.map(todo =>
          <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            {...todo}
          />)
      }
    </List>
  )
};

export default TodoList;