import './App.css';
import React, { useState } from 'react';
import TodoLi from './todo-li';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo Uygulaması</h1>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Yapılacakları girin..."
        />
        <button onClick={addTodo}>Ekle</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoLi key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;