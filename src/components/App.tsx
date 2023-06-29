import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import ITodo from '../types/data';
import TodoList from './TodoList';

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
    <>
      <div>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList
        items={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </>
  )
}

export default App;