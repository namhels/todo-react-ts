import React from 'react';
import ITodo from '../types/data';
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox   } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

interface ITodoItem extends ITodo {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = ({id, title, completed, removeTodo, toggleTodo}) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => removeTodo(id)} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
      disablePadding>

      <ListItemButton
        role={undefined}  dense
      >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={completed}
                  onChange={() => toggleTodo(id)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': id }}
                />
              </ListItemIcon>
              <ListItemText id={id} primary={title} />
      </ListItemButton>
    </ListItem>
  )
};

export default TodoItem;