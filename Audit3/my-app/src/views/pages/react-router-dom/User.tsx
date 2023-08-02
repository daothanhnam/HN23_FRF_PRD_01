import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Topics from "./Topics";
import UserDetails from "./UserDetail";

const Users = () => {
  const [text, setText] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event?.target.value);
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="?userId=1&name=Hai">Go to Hai Detail</Link>
        </li>
        <li>
          <Link to="?userId=2&name=Hieu">Go to Hieu Detail</Link>
        </li>
        <li>
          <Link to="?userId=3&name=Son">Go to Son Detail</Link>
        </li>
      </ul>
      <textarea onChange={handleChange}></textarea>

      <Topics></Topics>
    </div>
  );
};

export default Users;
