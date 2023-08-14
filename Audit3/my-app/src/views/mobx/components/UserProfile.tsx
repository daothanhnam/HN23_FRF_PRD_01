import { TextField, Button } from "@mui/material";
import { Observer } from "mobx-react";
import { Fragment } from "react";
import { userStore } from "../store/user.store";

const UserProfile = () => {
  let userID = " ";
  const handleChange = (event: any) => {
    userID = event.target.value;
    console.log(" userID:", userID);
  };

  const handleClick = () => {
    if (userID) {
      userStore.updateUserId(userID);
    }
  };
  return (
    <Observer>
      {() => (
        <Fragment>
          <h3>User Profile </h3>
          <TextField
            label="Change UserId"
            onChange={handleChange}
            defaultValue={userStore.userId}
          />
          <p>
            Username : <strong>{userStore.username}</strong>
          </p>
          <p>
            UserID : <strong>{userStore.userId}</strong>
          </p>

          <Button variant="outlined" onClick={handleClick}>Save</Button>
        </Fragment>
      )}
    </Observer>
  );
};

export default UserProfile;
