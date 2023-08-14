import { Fragment } from "react";
import HeaderMobx from "./Header";
import UserProfile from "./UserProfile";

const MobxComponent = () => {
  return (
    <Fragment>
      <HeaderMobx />
      <UserProfile/>
    </Fragment>
  );
};
export default MobxComponent;
