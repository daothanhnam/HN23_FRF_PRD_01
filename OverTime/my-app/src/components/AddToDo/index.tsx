import * as React from "react";

export interface IAddTodoProps {
  handleAddTodo: (todoContent: string) => void;
}

export default function AddTodo({ handleAddTodo }: IAddTodoProps) {
  const [todoContent, setTodoContent] = React.useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("On changge event:trigger: ", event.target.value);
    setTodoContent(event.target.value);
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo(todoContent);
    setTodoContent("");
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        {" "}
        <input value={todoContent}  onChange={handleOnChange} />
        <button type="submit"> Add todo</button>
      </form>
    </div>
  );
}
