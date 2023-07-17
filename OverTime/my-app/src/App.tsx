import { useState } from "react";
import AddTodo from "./components/AddToDo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ITodoItem } from "./types/todoType";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    {
      id: "1",
      content: "Todo 1",
      isCompleted: true,
    },
    {
      id: "2",
      content: "Todo 2",
      isCompleted: false,
    },
    {
      id: "3",
      content: "Todo 3",
      isCompleted: true,
    },
  ]);

  const handleAddTodo = (todoContent: string) => {
    console.log("In App.tsx", todoContent);
    const newTodoItem: ITodoItem = {
      content: todoContent,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodoList([...todoList, newTodoItem]);
  };

  const handleDel = (id: string) => {
    console.log("In App.tsx", id);

    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  return (
    <div className="App">
      <Header />
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList handleDel={handleDel} todoList={todoList} />
    </div>
  );
}

export default App;
