import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
const Header = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand>Calorie Tracker Application</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/home" exact>
        Home
      </Nav.Link>
      <NavDropdown title="Users">
        <NavDropdown.Item as={NavLink} to="/users">
          View all users
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/updateUser">
          Update user
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/deleteUser">
          Delete user
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Calories">
        <NavDropdown.Item as={NavLink} to="/calories">
          View all calorie counts
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/addCalorie">
          Add calorie
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/updateCalorieEntry">
          Update calorie entry
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/deleteCalorieEntry">
          Delete calorie entry
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={NavLink} to="/logout" exact>
        Logout
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
