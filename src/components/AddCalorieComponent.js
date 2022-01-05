import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export function AddCalorieComponent(props) {
  const { users } = props;
  const [validated, setValidated] = useState(false);
  const [userId, setUserId] = useState(
    users[0] === undefined ? "" : users[0].userId
  );
  const [calorieCount, setCalorieCount] = useState("");
  const [foodType, setFoodType] = useState("Snack");

  const [toSendUserId, setToSendUserId] = useState(
    users[0] === undefined ? "" : users[0].userId
  );

  const saveCalorie = (userId, calorieCount, foodType) => {
    const { saveCalorie } = props.actions;
    saveCalorie(userId, calorieCount, foodType);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }

    if (
      toSendUserId != null &&
      toSendUserId !== "" &&
      calorieCount != null &&
      calorieCount !== "" &&
      calorieCount >= 0 &&
      foodType != null &&
      foodType !== ""
    ) {
      saveCalorie(toSendUserId, calorieCount, foodType);
    } else {
      toast.warning("All info not entered correctly");
    }
  };
  const handleUserIdChange = (event) => {
    setToSendUserId(event.target.value.split("(")[0]);
    setUserId(event.target.value);
  };
  const handleCalorieCountChange = (event) => {
    setCalorieCount(event.target.value);
  };
  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  return (
    <div className="container">
      <center>
        <h1>Add Calorie Entry</h1>
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
          <Form.Group>
            <Form.Label>Enter Calorie Count</Form.Label>
            <Form.Control
              required
              type="number"
              min="10"
              step="1"
              max="150 "
              placeholder="Enter any number within 10-150"
              value={calorieCount}
              onChange={handleCalorieCountChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid calorie count
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks Good !</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Food Type</Form.Label>
            <Form.Control
              value={foodType}
              onChange={handleFoodTypeChange}
              required
              as="select"
            >
              <option>Snack</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a food type
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
    </div>
  );
}
