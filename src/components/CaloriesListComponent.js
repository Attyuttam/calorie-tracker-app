import React from "react";
import Table from "react-bootstrap/Table";

export class CaloriesListComponent extends React.Component {
  componentDidMount() {
    const { loadCalories } = this.props.actions;
    loadCalories();
  }
  render() {
    const { calories } = this.props;
    const { users } = this.props;
    return (
      <div className="container">
        <center>
          <h1 style={{ paddingBottom: "2em" }}>List of Calories </h1>
        </center>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Calorie Id</th>
              <th>Calorie Count</th>
              <th>Food Type</th>
              <th>Entry Date</th>
            </tr>
          </thead>
          <tbody>
            {calories.map((calorie, i) => (
              <tr key={calorie.calorieId}>
                <td>
                  {calorie.userId}--
                  {
                    users
                      .filter((user) => user.userId === calorie.userId)[0]
                      .userName.split(" ")[0]
                  }
                </td>
                
                <td>{calorie.calorieId}</td>
                <td>{calorie.calorieCount}</td>
                <td>{calorie.calorieFoodType}</td>
                <td>{calorie.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
