import { AppBar, Toolbar, Typography } from "@mui/material";

import { userStore } from "../store/user.store";

const HeaderMobx = () => {
  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h4"></Typography>
        <Typography variant="caption">
          Username: {userStore.username} - <strong> </strong> {userStore.userId}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobx;
