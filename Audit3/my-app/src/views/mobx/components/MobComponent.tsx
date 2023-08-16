import { Fragment, ReactNode, SyntheticEvent, useState } from "react";

import HeaderMobx from "./Header";

import UserProfile from "./UserProfile";

import FooterMobx from "./Footer";

import { Box, Tab, Tabs, Typography } from "@mui/material";

import CounterMobx from "./Counter";

import SpreadSheets from "./SpreadSheet";

const MobxComponent = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <HeaderMobx />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="User Profile"></Tab>

            <Tab label="Tab2"></Tab>

            <Tab label="SpreadSheets"></Tab>
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <UserProfile />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <CounterMobx />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <SpreadSheets />
        </CustomTabPanel>
      </Box>

      <FooterMobx />
    </Fragment>
  );
};

interface TabPanelProps {
  children?: ReactNode;

  index: number;

  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default MobxComponent;
