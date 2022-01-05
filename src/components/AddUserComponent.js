import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export function AddUserComponent(props) {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userGender, setUserGender] = useState("M");

  const saveUser = (userName, userAge, userAddress, userGender) => {
    const { saveUser } = props.actions;
    saveUser(userName, userAge, userAddress, userGender);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    if (
      userName != null &&
      userName !== "" &&
      userAge != null &&
      userAge !== "" &&
      userAge >= 10 &&
      userAge <= 150 &&
      userAddress != null &&
      userAddress !== "" &&
      userGender != null &&
      userGender !== ""
    ) {
      saveUser(userName, userAge, userAddress, userGender);
    } else {
      toast.warning("All info not entered correctly");
    }
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleUserAgeChange = (event) => {
    setUserAge(event.target.value);
  };
  const handleUserAddressChange = (event) => {
    setUserAddress(event.target.value);
  };
  const handleUserGenderChange = (event) => {
    setUserGender(event.target.value);
  };
  return (
    <div className="container">
      <center>
        <h1>Add User</h1>
      </center>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter User Name</Form.Label>
          <Form.Control
            value={userName}
            onChange={handleUserNameChange}
            required
            type="text"
            placeholder="Example: Attyuttam Saha"
          />

          <Form.Control.Feedback>Looks Good !</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter User Age</Form.Label>
          <Form.Control
            required
            type="number"
            min="10"
            step="1"
            max="150 "
            placeholder="Enter any number within 10-150"
            value={userAge}
            onChange={handleUserAgeChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid age
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks Good !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter User Address</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            value={userAddress}
            onChange={handleUserAddressChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter address
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks Good !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Select User Gender</Form.Label>
          <Form.Control
            value={userGender}
            onChange={handleUserGenderChange}
            required
            as="select"
          >
            <option>M</option>
            <option>F</option>
            <option>Other</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select an user gender
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks Good !</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />
    </div>
  );
}
