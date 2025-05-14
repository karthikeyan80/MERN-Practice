import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodo([...todo, input]);
      setInput(" ");
    }
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="add a new item"
        />
        <button type="submit">Add items</button>
      </form>

      <ul>
        {todo.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
