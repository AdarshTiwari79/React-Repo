import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let todosList = [{ task: "sample task", id: uuidv4() }];
  let [todos, setTodos] = useState(todosList);
  let [newTodo, setNewTodo] = useState("");

  let newTask = (event) => {
    setNewTodo(() => {
      return event.target.value;
    });
  };

  let updatedTodos = () => {
    setTodos((prevTodes) => {
      return [...prevTodes, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let list = todos.map((todo) => {
    return <li key={todo.id}>{todo.task}</li>;
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
