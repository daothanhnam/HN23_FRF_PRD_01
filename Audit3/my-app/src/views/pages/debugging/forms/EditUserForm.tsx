import { useEffect, useState } from "react";

const EditUser = (props: any) => {
  const [user, setUser] = useState(props.currentUser);
  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button button-muted"
      >
        Cancel
      </button>
    </form>
  );
};
export default EditUser;
