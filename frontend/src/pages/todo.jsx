import { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      {/* 🔹 Taskbar */}
      <header className="taskbar">
        <h1>📝 Todo App</h1>
        <button className="logout-btn">Logout</button>
      </header>

      {/* 🔹 Main */}
      <div className="todo-container">
        <h2>Manage your tasks</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "done" : ""}>
              <span onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Footer */}
      <footer className="footer">
        <p>Todo App | Built with React 💙</p>
      </footer>
    </div>
  );
};

export default Todo;
