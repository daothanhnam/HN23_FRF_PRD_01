//@ts-nocheck
import axios from "axios";
import React, { Fragment } from "react";
import { API_URL } from "../../../AppApi";
import AppServices from "./AppServices";

interface WithAxiosProps {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
}

export class WithAxios extends React.Component {
  state = {
    results: [] as any,
    name: null,
    status: null,
    id: null,
  };

  requestPostOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: this.state.name }),
  };

  requestPutOption = { ...this.requestPostOption, method: "PUT" };

  search = (event: any) => {
    const userId = event.target.value ? `/${event.target.value}` : "";
    AppServices.getUser(userId).then((response) => {
      this.setState({ results: response });
    });
    // Cách 1
    // axios(API_URL + userId, {})
    //   .then((response) => this.setState({ results: response.data }))
    //   .catch((error) => console.log(error));

    // Cách 2
    // axios({
    //   method: "GET",2
    //   url: API_URL + userId,
    //   headers: {},
    // })
    // .then((response) => this.setState({ results: response.data }))
    // .catch((error) => console.log(error));

    // Cách 3
    // axios
    //   .get(API_URL + userId, {})
    //   .then((response) => this.setState({ results: response.data }))
    //   .catch((error) => console.log(error));
  };

  postUser = () => {
    // axios
    //   .post(API_URL, {
    //     name: this.state.name,
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((response) => this.setState({ results: response.data, name: "" }))
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axios({
    //   method: "POST",
    //   url: API_URL,
    //   data: { name: this.state.name },
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => this.setState({ results: response.data, name: "" }))
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const data = { name: this.state.name };
    AppServices.postRequest(API_URL, data, {
      "Content-Type": "application/json",
    }).then((response) => this.setState({ results: response.data, name: "" }));
  };

  deleteUser = () => {
    // axios({
    //   method: "DELETE",
    //   url: API_URL + `/${this.state.id}`,
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => {
    //     this.setState({ id: "" });
    //     alert(`Deleted user: ${response.data.id}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios
    //   .delete(API_URL + `/${this.state.id}`, {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((response) => {
    //     this.setState({ id: "" });
    //     alert(`Deleted user: ${response.data.id}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const userId = this.state.id;
    AppServices.deleteRequest(API_URL + `/${userId}`, {
      "Content-Type": "application/json",
    })
      .then((response) => {
        this.setState({ id: "" });
        alert(`Deleted user: ${response.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateUser = () => {
    // axios({
    //   method: "PUT",
    //   url: API_URL + `/${this.state.id}`,
    //   data: { name: this.state.name },
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => {
    //     this.setState({ id: "", name: "" });
    //     alert(`Updated user: ${response.data.id}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axios
    //   .put(
    //     API_URL + `/${this.state.id}`,
    //     { name: this.state.name },
    //     { headers: { "Content-Type": "application/json" } }
    //   )
    //   .then((response) => {
    //     this.setState({ id: "", name: "" });
    //     alert(`Updated user: ${response.data.id}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const userId = this.state.id;
    const data = { name: this.state.name };
    AppServices.updateRequest(API_URL + `/${userId}`, data, {
      "Content-Type": "application/json",
    })
      .then((response) => {
        this.setState({ id: "", name: "" });
        alert(`Updated user: ${response.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChangeUser = (event: any) => {
    if (event?.target.value) {
      this.setState({ name: event?.target.value });
    }
  };

  handleChangeUserId = (event: any) => {
    if (event?.target.value) {
      this.setState({ id: event?.target.value });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <h2>With Axios</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type to search"
              onKeyUp={this.search}
            />
          </div>
          <ul className="list-group">
            {Array.isArray(this.state.results) ? (
              this.state.results?.map((item: WithAxiosProps, index: number) => {
                return (
                  <li key={index} className="list-group-item">
                    {`${item.id} - ${item.name}`}
                  </li>
                );
              })
            ) : (
              <li className="list-group-item">
                {`${this.state.results?.id} - ${this.state.results?.name}`}
              </li>
            )}
          </ul>
          <h2>Add more user</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type to search"
              onChange={this.handleChangeUser}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.postUser}>
              Add User
            </button>
          </div>

          <h2>Delete user</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type user's id"
              // value={this.state.id}
              onChange={this.handleChangeUserId}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-danger" onClick={this.deleteUser}>
              Delete user
            </button>
          </div>

          <h2>Update user</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type user's id"
              value={this.state.id}
              onChange={this.handleChangeUserId}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Type user's name"
              value={this.state.name}
              onChange={this.handleChangeUser}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-warning" onClick={this.updateUser}>
              Update user
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
