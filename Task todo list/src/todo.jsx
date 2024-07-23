import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let todosList = [{ task: "sample task", id: uuidv4(), isDone: false }];

  let [todos, setTodos] = useState(todosList);
  let [newTodo, setNewTodo] = useState("");

  let newTask = (event) => {
    setNewTodo(() => {
      return event.target.value;
    });
  };

  let updatedTodos = () => {
    setTodos((prevTodes) => {
      return [...prevTodes, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let deleteAction = (id) => {
    let newTodos = todos.filter((todo) => {
      todo.id !== id;
    });
    setTodos(newTodos);
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  let list = todos.map((todo) => {
    return (
      <li key={todo.id}>
        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
          {todo.task}
        </span>{" "}
        <button onClick={() => deleteAction(todo.id)}>Delete</button>
        <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
      </li>
    );
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

      <button onClick={markAsAllDone}>Mark as all done</button>
    </>
  );
}

export default Todo;
