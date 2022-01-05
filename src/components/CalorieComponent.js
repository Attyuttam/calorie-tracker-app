import React from "react";
import Table from "react-bootstrap/Table";
export function CalorieComponent(props) {
  const { calorie } = props;
  return (
    <div style={{paddingTop:'2em'}}className="container">
      <Table striped bordered hover size="sm" variant="light">
          <tbody>
            <tr>
                <td>Calorie Id: </td>
                <td>{calorie.calorieId}</td>
            </tr>
            <tr>
                <td>User Id: </td>
                <td>{calorie.userId}</td>
            </tr>
            <tr>
                <td>Calorie Count: </td>
                <td>{calorie.calorieCount}</td>
            </tr>
            <tr>
                <td>Calorie Food Type: </td>
                <td>{calorie.calorieFoodType}</td>
            </tr>
          </tbody>
      </Table>
    </div>
  );
}
