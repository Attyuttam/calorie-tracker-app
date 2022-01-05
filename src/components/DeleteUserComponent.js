import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";

export function DeleteUserComponent(props) {
  const { users } = props;
  const { deleteUser } = props.actions;
  const [validated, setValidated] = useState(false);

  const [userId, setUserId] = useState(users[0].userId);
  const [displayUserId, setDisplayUserId] = useState(
    users[0].userId + "--" + users[0].userName
  );

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    deleteUser(userId);
  };

  const handleUserIdChange = (event) => {
    setDisplayUserId(event.target.value);
    setUserId(event.target.value.split("--")[0]);
  };

  return (
    <div className="container">
      <center>
        <h1>Delete User</h1>
      </center>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select UserId</Form.Label>
          <Form.Control
            value={displayUserId}
            onChange={handleUserIdChange}
            required
            as="select"
          >
            {users.map((user, i) => (
              <option key={user.userId}>
                {user.userId}--{user.userName}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select an userId
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
