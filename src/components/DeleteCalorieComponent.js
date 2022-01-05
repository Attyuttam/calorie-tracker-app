import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast, ToastContainer } from "react-toastify";
import { CalorieComponent } from "./CalorieComponent";

export function DeleteCalorieComponent(props) {
  const { users } = props;
  const { calories } = props;
  const { deleteCalorie } = props.actions;
  const [validated, setValidated] = useState(false);

  const [userId, setUserId] = useState(
    users[0] === undefined ? "" : users[0].userId
  );
  const [displayUserId, setDisplayUserId] = useState(
    users[0] === undefined ? "" : users[0].userId + "--" + users[0].userName
  );
  const [calorieId, setCalorieId] = useState("");
  const [displayCaloriesByUser, setDisplayCaloriesByUser] = useState(
    users[0] === undefined
      ? ""
      : calories.filter((calorie) => calorie.userId === users[0].userId)
  );

  useEffect(() => {
    setDisplayCaloriesByUser(
      calories.filter((calorie) => calorie.userId === userId)
    );
  }, [displayUserId, calories, userId]);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    if (calorieId !== null && calorieId !== "") {
      deleteCalorie(calorieId);
    } else {
      toast.warning("Please click on the calorie Id that you want to select");
    }
  };

  const handleCalorieIdChange = (event) => {
    setCalorieId(event.target.value);
  };
  const handleUserIdChange = (event) => {
    setDisplayUserId(event.target.value);
    setUserId(event.target.value.split("--")[0]);
  };

  return (
    <div className="container">
      <center>
        <h1>Delete Calorie Entry</h1>
      </center>
      {users[0] === undefined ? (
        <div>
          <h2 className="text-center">No Users Available</h2>
        </div>
      ) : (
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

          <Form.Group>
            <Form.Label>Select CalorieId to be updated</Form.Label>
            <Form.Control
              value={calorieId}
              onChange={handleCalorieIdChange}
              onClick={handleCalorieIdChange}
              required
              as="select"
            >
              {displayCaloriesByUser.map((calorie, i) => (
                <option key={calorie.calorieId}>{calorie.calorieId}</option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a calorieId
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks Good !</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Submit form</Button>
        </Form>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />

      {calorieId !== null && calorieId !== "" ? (
        <CalorieComponent
          calorie={
            calories.filter((calorie) => calorie.calorieId === calorieId)[0]
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}
