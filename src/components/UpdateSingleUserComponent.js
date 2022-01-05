import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";
import {UpdateUserComponent} from './UpdateUserComponent';

export function UpdateSingleUserComponent(props) {
  const { users } = props;
  
  const [viewUpdateForm, setViewUpdatedForm] = useState(false);
  const [validated, setValidated] = useState(false);
  const [userId, setUserId] = useState(users[0].userId);
  
  const [toSendUserId, setToSendUserId] = useState(users[0].userId);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }

    
    setViewUpdatedForm(true);
  };

  const handleUserIdChange = (event) => {
    setToSendUserId(event.target.value.split("(")[0]);
    setUserId(event.target.value);
  };
  if(viewUpdateForm){
      return(
          <UpdateUserComponent userId={toSendUserId} actions={props.actions}/>
      );
  }
  return (
    <div className="container">
      <center>
        <h1>Update User</h1>
      </center>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select UserId to be updated</Form.Label>
          <Form.Control
            value={userId}
            onChange={handleUserIdChange}
            required
            as="select"
          >
            {users.map((user, i) => (
              <option key={user.userId}>
                {user.userId}({user.userName})
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
