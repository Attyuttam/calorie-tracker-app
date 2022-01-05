import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { getCalorieById } from "../reducers/calorieReducer";
import { useSelector } from "react-redux";

export function UpdateCalorieComponent(props) {
  const paramCalorieId = props.calorieId;
  const paramUserName = props.userName;

  const calorie = useSelector((state) => getCalorieById(state, paramCalorieId));

  const { updateCalorie } = props.actions;

  const [validated, setValidated] = useState(false);
  const [calorieCount, setCalorieCount] = useState(calorie.calorieCount);
  const [calorieFoodType, setCalorieFoodType] = useState(
    calorie.calorieFoodType
  );

  const calorieId = calorie.calorieId;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }

    if (calorieCount != null && calorieCount > 0 && calorieFoodType != null) {
      updateCalorie(calorieId, calorie.userId,calorieCount, calorieFoodType,calorie.date);
    } else {
      toast.warning("All info not entered correctly");
    }
  };
  const handleCalorieCountChange = (event) => {
    setCalorieCount(event.target.value);
  };
  const handleCalorieFoodTypeChange = (event) => {
    setCalorieFoodType(event.target.value);
  };
  
  return (
    <div className="container">
      <center>
        <h1>
          Update calorie entry by user{" "}
          {paramUserName}
        </h1>
      </center>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            value={calorieFoodType}
            onChange={handleCalorieFoodTypeChange}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />
    </div>
  );
}
