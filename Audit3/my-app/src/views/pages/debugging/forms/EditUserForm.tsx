import React, { useEffect, useState } from "react";

const EditUserForm = (props: any) => {
  const [user, setUser] = useState(props.currentUser);
  useEffect(() => {
    // setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
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
        value={user.name}
        name="name"
        onChange={handleInputChange}
      />
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        value={user.username}
        name="username"
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        type="button"
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel user{" "}
      </button>
    </form>
  );
};

export default EditUserForm;
