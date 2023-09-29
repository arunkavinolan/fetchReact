
import React, { useState } from 'react';

const TodoFetch = () => {                          // Intial Todo
  const [todos, setTodos] = useState([
    { id: 1, text: '"rerum debitis voluptatem qui eveniet tempora distinctio a', completed: false },
    { id: 2, text: '"sed ut vero sit molestiae', completed: true },
    { id: 3, text: 'rerum ex veniam mollitia voluptatibus pariatur', completed: false },
    { id: 4, text: 'consequuntur aut ut fugit similique', completed: true },
    { id: 5, text: 'dignissimos quo nobis earum saepe', completed: true},
    { id: 6, text: 'quis eius est sint explicabo', completed: false },
    { id: 7, text: 'numquam repellendus a magnam', completed: false },
    { id: 8, text: 'ipsam aperiam voluptates qui', completed: true },
    {id:9,   text:   "numquam repellendus a magnam",completed:true}, 
    { id: 10, text: 'quis ut nam facilis et officia qui', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = Math.max(...todos.map((todo) => todo.id), 0) + 1;
    const newTodoItem = { id: newId, text: newTodo, completed: false };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
  <div className="body" style={{marginTop:"130px"}}>
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center mb-4"> My To-Do </h3>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new to-do..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-warning"
                type="button"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
          </div>
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`list-group-item ${
                  todo.completed ? 'completed' : ''
                }`}
              >
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.text}
                <button
                  className="btn btn float-right"
                  onClick={() => removeTodo(todo.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TodoFetch;