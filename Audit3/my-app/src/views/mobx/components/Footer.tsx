import { AppBar, Toolbar, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { CounterStore } from "../store/couter.store";

const FooterMobx = () => {
  return (
    <AppBar position="fixed" color="secondary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h4">Footer</Typography>

        <Typography variant="caption">
          Counter computed: {CounterStore.total}
        </Typography>

        <Typography variant="caption">
          Counter action: {CounterStore.getCount()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default observer(FooterMobx);
