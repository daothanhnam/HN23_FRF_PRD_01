import React, { Fragment, useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import "./UserCRUD.css";

const UserCRUD = () => {
  const usersData = [
    { id: 1, name: "Nam", username: "namdt20" },
    { id: 2, name: "Hai", username: "hains6" },
    { id: 3, name: "Chien", username: "chiennv20" },
    { id: 4, name: "Phuong", username: "phuongl1" },
    { id: 5, name: "Tuan", username: "tuanvq11" },
    { id: 6, name: "Tuan Anh", username: "anhdt105" },
  ];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const [editing, setEditing] = useState(false);

  const editRow = (user: any) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const deleteUser = (userId: any) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const addUser = (user: any) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const updateUser = (id: any, updateUser: any) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? user : updateUser)));
  };
  return (
    <div className="container">
      <h2>CRUD APP</h2>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            //Edit component
            <Fragment>
              <h3>Edit user</h3>
              <EditUserForm
                editing={editing}
                currentUser={currentUser}
                updateUser={editRow}
              />
            </Fragment>
          ) : (
            //Add compoent
            <Fragment>
              <h3>Add user </h3>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h3>View User</h3>
          {/* Table */}
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default UserCRUD;
