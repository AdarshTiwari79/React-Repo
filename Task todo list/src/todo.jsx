import { useState } from "react";

function Todo() {
  let todosList = ["sample task"];
  let [todos, setTodos] = useState(todosList);
  let [newTodo, setNewTodo] = useState("");

  let newTask = (event) => {
    setNewTodo(() => {
      return event.target.value;
    });
  };

  let updatedTodos = () => {
    setTodos((prevTodes) => {
      return [...prevTodes, newTodo];
    });
    setNewTodo("");
  };

  let list = todos.map((todo) => {
    return <li>{todo}</li>;
  });

  return (
    <>
      <input
        placeholder="Enter task here"
        value={newTodo}
        onChange={newTask}
      ></input>
      <button onClick={updatedTodos}>Add Task</button>

      <h3>Task todo List</h3>
      <ul>{list}</ul>
    </>
  );
}

export default Todo;
