import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodo/CreateTodoButton";

const todoArray = [
  {text: "Todo #1", completed: false},
  {text: "Todo #2", completed: false},
  {text: "Todo #3", completed: false},
  {text: "Todo #4", completed: false},
  {text: "Todo #5", completed: false},
  {text: "Todo #6", completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todoArray.map(item => (
          <TodoItem key={item.text} text={item.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
