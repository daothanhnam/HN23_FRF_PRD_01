import React from "react";

const UserContext = React.createContext({
  username: "",
  email: "",

  onUpdateUser: (value: string) => {},
  onUpdateEmail: (value: string) => {},
});

export default UserContext;
