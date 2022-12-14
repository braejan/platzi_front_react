import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodo/CreateTodoButton";

const defaultTodos = [
  {text: "Solidity Blockchain Developer", completed: true},
  {text: "Rust Blockchain Developer", completed: false},
  {text: "Frontend con React", completed: false},
  {text: "English - Advance Complementary", completed: false},
  {text: "Backend con Go", completed: false},
  {text: "Youtube Channel", completed: true},
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
  const totalCompleted = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={totalCompleted}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(item => (
          <TodoItem 
            key={item.text}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
