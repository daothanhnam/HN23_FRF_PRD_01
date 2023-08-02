import React from "react";

export default class ReactBasicForm extends React.Component {
  state = {
    emailAddress: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
  };

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Email: ", event.target.value);
    this.setState({ emailAddress: event.target.value });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value, errorPassword: "" }, () => {
      if (this.state.password.length < 4 || this.state.password.length > 10) {
        this.setState({
          errorPassword: "Password length must be between 4 and 10 characters!",
        });
      }
    });
  };

  handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ConfirmPassword", event.target.value);
    this.setState({
      confirmPassword: event.target.value,
      errorConfirmPassword: "",
    });
  };

  handleShowPassord = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState: any) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validate()) {
      return;
    }
    //Do something with form
  };
  validate = () => {
    let error = false;

    // validate email
    if (!this.state.emailAddress) {
      this.setState({
        errorEmail: " Email is required! ",
      });
      error = true;
    }

    // validate password
    if (!this.state.password) {
      this.setState({
        errorPassword: " Password is required! ",
      });
      error = true;
    }

    if (
      !this.state.confirmPassword ||
      this.state.confirmPassword !== this.state.password
    ) {
      this.setState({
        errorConfirmPassword: " Confirm password must equal password! ",
      });
      error = true;
    }
    return error;
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "mediumseagreen",
          margin: "20px 0 20px ",
          padding: "15px",
        }}
        className="container "
      >
        <h2>Registration new user </h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          {/* Email address  */}
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email "
              id="email-address"
              className={`form-control ${
                this.state.errorEmail ? "is-invalid" : ""
              }`}
              placeholder="Enter email "
              value={this.state.emailAddress}
              onChange={this.handleEmailChange}
            />
            {this.state.errorEmail && (
              <div className="text-danger">{this.state.errorEmail}</div>
            )}
          </div>
          {/* Password  */}
          <div className="form-group">
            <label htmlFor="current-password">Password </label>
            <input
              type={this.state.showPassword ? "text" : "password"}
              id="current-password"
              className={`form-control ${
                this.state.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password "
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            {this.state.errorPassword && (
              <div className="text-danger">{this.state.errorPassword}</div>
            )}
          </div>
          {/* Confirm */}
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type={this.state.showPassword ? "text" : "password"}
              id="confirm-password"
              className={`form-control ${
                this.state.errorEmail ? "is-invalid" : ""
              }`}
              placeholder="Re-render password "
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPassword}
            />
            {this.state.errorConfirmPassword && (
              <div className="text-danger">
                {this.state.errorConfirmPassword}
              </div>
            )}
          </div>
          {/* Show/hide password */}
          <div className="form-group">
            <input
              type="checkbox"
              id="show-password "
              className="show-password"
              checked={this.state.showPassword}
              onChange={this.handleShowPassord}
            />
            <label htmlFor="show-password">Check to display password </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
