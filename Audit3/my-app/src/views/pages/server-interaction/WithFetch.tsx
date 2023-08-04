//@ts-nocheck
import React, { Fragment } from "react";
import { API_URL } from "../../../AppApi";

interface WithFecthProps {
  avatar: string;
  createdAt: string;
  name: string;
  id: number;
}
export class WithFetch extends React.Component {
  state = {
    results: [] as any,
    name: null,
    status: null,
    id: null,
  };
  requestPostOption = {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: this.state.name }),
  };
  requestPutOption = { ...this.requestPostOption, method: "PUT" };
  controller?: AbortController;

  //GET METHOD
  search = (event: any) => {
    
    this.controller = new AbortController();
    const userId = event.target.value ? `/${event.target.value}` : "";
    fetch(API_URL + userId, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((respone) => respone.json())
      .then((data) => this.setState({ results: data }))
      .catch((error) => console.log(error));
  };

  postUser = (event: any) => {
    fetch(API_URL, {
      ...this.requestPostOption,
      body: JSON.stringify({ name: this.state.name }),
    })
      .then((respone) => respone.json())
      .then((data) => {
        this.setState({ results: data, name: " " });
      })
      .catch((error) => console.log(error));
  };
  handleChangeUser = (event: any) => {
    if (event?.target.value) {
      this.setState({ name: event?.target.value });
    }
  };

  deleteUser = () => {
    fetch(API_URL + `/${this.state.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((respone) => respone.json())
      .then((data) => {
        this.setState({ id: "" });
        alert(`Delete user: ${data.id}`);
      })
      .catch((error) => console.log(error));
  };
  handleChangeUserId = (event: any) => {
    if (event?.target.value) {
      this.setState({ id: event?.target.value });
    }
  };

  updateUser = (event: any) => {
    fetch(API_URL + `/${this.state.id}`, {
      ...this.requestPutOption,
      body: JSON.stringify({ name: this.state.name }),
    })
      .then((respone) => respone.json())
      .then((data) => {
        this.setState({ id: "", name: " " });
        alert(`Update user : ${data.id}`);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          {/* Fetch api  */}
          <h2>With Fetch</h2>
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
              this.state.results?.map((item: WithFecthProps, index: number) => {
                return (
                  <li key={index} className="list-group-item">
                    {`${item.id} - ${item.name}`}
                  </li>
                );
              })
            ) : (
              <li className="list-group-item">
                {`${this.state.results?.id} -${this.state.results?.name}`}
              </li>
            )}
          </ul>
          {/* Add user  */}
          <h2>More User </h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="User's name "
              onKeyUp={this.handleChangeUser}
            />
          </div>
          <div className="from-group">
            <button className="btn btn-primary" onClick={this.postUser}>
              Add user{" "}
            </button>
          </div>
          {/* Delte user  */}
          <h2>Delete User </h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="User's id "
              onChange={this.handleChangeUserId}
            />
          </div>
          <div className="from-group">
            <button className="btn btn-danger" onClick={this.deleteUser}>
              Delete
            </button>
          </div>
          {/* Update user  */}
          <h2>Update User </h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder=" Type User's id "
              value={this.state.id}
              onChange={this.handleChangeUserId}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder=" Type User's name "
              value={this.state.name}
              onChange={this.handleChangeUser}
            />
          </div>
          <div className="from-group">
            <button className="btn btn-warning" onClick={this.updateUser}>
              Update User
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
