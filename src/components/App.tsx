import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import ITodo from '../types/data';
import TodoList from './TodoList';
import { Box, Button, Stack, TextField } from '@mui/material';

// import { pink } from '@mui/material/colors';
import { Send } from '@mui/icons-material';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);


  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])


  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  const addTodo = () => {
    if (value) {
      setTodos([
      ...todos, {
        id: nanoid(),
        title: value,
        completed: false,
      }
    ])
    setValue('')
    }
  }

  const removeTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: string): void => {
    setTodos(todos.map(todo =>
      todo.id !== id
        ? todo
        : { ...todo, completed: !todo.completed }
    ))
  }

  return (
    <Box mt={25} ml='58%'>
      <Stack direction="row" spacing={2}>
        <TextField
          label="todo"
          variant="outlined"
          size="small"
          // sx={{ color: pink[500] }}
          color="warning"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <Button
          variant="contained"
          color="info"
          endIcon={<Send />}
          onClick={addTodo}
        >Add</Button>
      </Stack>
      <TodoList
        items={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </Box>
  )
}

export default App;