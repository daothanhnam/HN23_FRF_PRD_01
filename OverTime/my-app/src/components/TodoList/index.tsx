import * as React from "react";
import { ITodoItem } from "../../types/todoType";

export interface TodoListProps {
  todoList: ITodoItem[];
  handleDel: (id: string) => void;
}

export default function TodoList({ todoList, handleDel }: TodoListProps) {
  const handleDelTodo = (id: string) => {
    console.log("id: ", id);
    handleDel(id);
  };
  return (
    <div>
      {todoList.map((item, index) => (
        <div key={item.id}>
          {index} : {item.content}
          <button onClick={() => handleDelTodo(item.id)}> Delete </button>
          <button> Change Status </button>
        </div>
      ))}
    </div>
  );
}
