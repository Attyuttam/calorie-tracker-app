import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import '../styles/reactLinkStyle.css';
export class UsersListComponent extends React.Component {
  componentDidMount() {
    const { loadUsers } = this.props.actions;
    loadUsers();
  }
  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <center>
          <h1 style={{ paddingBottom: "2em" }}>List of Users </h1>
        </center>

        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.userId}>
                <td>
                  <Link className="link" to={"/calorieDetailsForUser/" + user.userId}>
                    {" "}
                    {user.userId}
                  </Link>
                </td>
                <td>{user.userName}</td>
                <td>{user.userAge}</td>
                <td>{user.userAddress}</td>
                <td>{user.userGender}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
