import { Fragment } from "react";

const LoginComponent = (props: any) => {
  return (
    <Fragment>
      <h2>Login page</h2>
      <h2>Login Status{props.isLoggedIn  ? "LoggedIn" :"Not Logged In"} </h2>
      <br />
      <button onClick={() => props.setLoggedIn(!props.isLoggedIn)}></button>
    </Fragment>
  );
};
export default LoginComponent;
