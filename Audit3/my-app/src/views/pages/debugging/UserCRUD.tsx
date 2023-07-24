import React, { Fragment, useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import { User } from "./types/user.types";
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
  const initialFormState = { id: 0, name: "", username: "" };

  const [users, setUsers] = useState<User[]>(usersData);

  const [currentUser, setCurrentUser] = useState<User>(initialFormState);

  const [editing, setEditing] = useState(false);

  const editRow = (id: number) => {
    setEditing(true);
    const foundUser = users.find((user) => user.id === id);
    setCurrentUser(foundUser as User);
  };

  const deleteUser = (userId: any) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const addUser = (user: any) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  // const updateUser = () => {
  //   setEditing(false);
  //   // const editedUsers = (userList: User[]) => {
  //   //   return userList.map((user) => {
  //   //     if (user.id === currentUser.id) {
  //   //       return currentUser;
  //   //     }
  //   //     return user;
  //   //   });
  //   // };
  //   // setUsers();
  // };
  const updateUser = (id: any, updatedUser: any) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
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
                updateUser={updateUser}
                setEditing={setEditing}
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
