import React, { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  const fetchTodos = () => {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (res.ok) setIsLoggedIn(true);
        else alert('Invalid login');
      });
  };

  const handleAddTodo = () => {
    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        setNewTodo({ title: '', description: '' });
        fetchTodos();
      });
  };

  const handleDeleteTodo = id => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE'
    }).then(fetchTodos);
  };

  const handleEditTodo = (id) => {
    const updatedTitle = prompt("New Title:");
    const updatedDescription = prompt("New Description:");
    fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: updatedTitle, description: updatedDescription })
    }).then(fetchTodos);
  };

  useEffect(() => {
    if (isLoggedIn) fetchTodos();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login</h2>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input placeholder="Title" value={newTodo.title} onChange={e => setNewTodo({ ...newTodo, title: e.target.value })} />
      <input placeholder="Description" value={newTodo.description} onChange={e => setNewTodo({ ...newTodo, description: e.target.value })} />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.description}
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;