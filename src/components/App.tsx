import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import ITodo from '../types/data';
import TodoList from './TodoList';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
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

  return (
    <>
      <div>
        <input value={value} onChange={handleChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos}/>
    </>
  )
}

export default App;