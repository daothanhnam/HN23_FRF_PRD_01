import { Fragment, useState } from "react";
import UserTable from "./tables/UserTable";
import AddUser from "./forms/AddUserForm";
import EditUser from "./forms/EditUserForm";
import "./UserCRUD.css";

const UserCRUD = () => {
  const usersData = [
    { id: 1, name: "Nam", username: "namdt20", isEdit: true, isDelete: false },
    { id: 2, name: "Hai", username: "hains6", isEdit: true, isDelete: false },
    {
      id: 3,
      name: "Chien",
      username: "chiennv20",
      isEdit: true,
      isDelete: false,
    },
    {
      id: 4,
      name: "Phuong",
      username: "phuongl1",
      isEdit: true,
      isDelete: false,
    },
    {
      id: 5,
      name: "Tuan",
      username: "tuanvq11",
      isEdit: true,
      isDelete: false,
    },
    {
      id: 6,
      name: "Tuan Anh",
      username: "anhdt105",
      isEdit: true,
      isDelete: false,
    },
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
            <Fragment>
              <h3>Edit user</h3>
              <EditUser
                editing={editing}
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h3>Add user</h3>
              <AddUser addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h3>View users</h3>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default UserCRUD;
