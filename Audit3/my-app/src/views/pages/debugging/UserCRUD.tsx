import { Fragment, useState } from "react";
import UserTable from "./tables/UserTable";
import AddUser from "./forms/AddUserForm";
import EditUser from "./forms/EditUserForm";
import "./UserCRUD.css";

const UserCRUD = () => {
  const usersData = [
     { id: 1, name: "nam", username: "namdt20", isEdit: true, isDelete: false },
    { id: 2, name: "chien", username: "namns7", isEdit: false, isDelete: true },
    { id: 3, name: "nam8", username: "namns8", isEdit: true, isDelete: false },
    { id: 4, name: "nam9", username: "namns9", isEdit: false, isDelete: true },
    {
      id: 5,
      name: "nam10",
      username: "namns10",
      isEdit: true,
      isDelete: false,
    },
    {
      id: 6,
      name: "nam11",
      username: "namns11",
      isEdit: false,
      isDelete: true,
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
