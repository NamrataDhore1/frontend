import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Users extends React.Component {
  state = {
    users: [],

    admin: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8081/api/viewuserslist")
      .then((response) => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <Link
          to="/users/addusers"
          className="btn btn-primary btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>Password</th>
              <th>Date Of Birth</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr>
                <td>{user.userid}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.mobileno}</td>
                <td>{user.password}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;