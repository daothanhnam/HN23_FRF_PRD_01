import { User } from "../types/user.types";

type UserTableProps = {
  users: {
    id: number;
    name: string;
    username: string;
  }[];
  editRow: (id: number) => void;
  deleteUser: (userId: any) => void;
};
const UserTable = ({ deleteUser, editRow, users }: UserTableProps) => (
  <table>
    <thead>
      <tr>
        <th>ID </th>
        <th>Name</th>
        <th>Username</th>

        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {users.length > 0 ? (
        users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>

            <td>
              <button
                onClick={() => {
                  editRow(user.id);
                }}
                className="button muted-button"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}></td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
