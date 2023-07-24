import ActionButton from "../../button/ActionButton";

const UserTable = (props: any) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user: any, index: number) => {
          return (
            <tr
              key={user.id}
              className={`${Number(index + 1) % 2 === 0 ? "bg-blue" : ""}`}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <ActionButton
                  title="Delete"
                  isShow={user.isDelete}
                  action={() => {
                    props.DeleteUser(user.id);
                  }}
                  className="button muted-button"
                />
                <ActionButton
                  title="Edit "
                  isShow={user.isEdit}
                  action={() => {
                    props.editRow(user);
                  }}
                />
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
