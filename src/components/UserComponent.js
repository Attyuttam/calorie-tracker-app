import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { PieChart } from "react-minimal-pie-chart";
import Button from "react-bootstrap/Button";

export function UserComponent(props) {
  const calories = props.calories;
  const userId = props.userId;
  const users = props.users;

  const [data, setData] = useState([]);
  const [snack, setSnack] = useState(0);
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [pieChartVisible, setPieChartVisible] = useState(false);

  const caloriesByUser = calories.filter(
    (calorie) => calorie.userId === userId
  );
  const user = users.filter((user) => user.userId === userId)[0];
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    setTotalCalories(
      caloriesByUser.reduce(
        (totalCaloriesConsumed, calorie) =>
          totalCaloriesConsumed + calorie.calorieCount,
        0
      )
    );
    setSnack(
      caloriesByUser
        .filter((calorie) => calorie.calorieFoodType === "Snack")
        .reduce((snack, calorie) => snack + calorie.calorieCount, 0)
    );
    setBreakfast(
      caloriesByUser
        .filter((calorie) => calorie.calorieFoodType === "Breakfast")
        .reduce((breakfast, calorie) => breakfast + calorie.calorieCount, 0)
    );
    setLunch(
      caloriesByUser
        .filter((calorie) => calorie.calorieFoodType === "Lunch")
        .reduce((lunch, calorie) => lunch + calorie.calorieCount, 0)
    );
    setDinner(
      caloriesByUser
        .filter((calorie) => calorie.calorieFoodType === "Dinner")
        .reduce((dinner, calorie) => dinner + calorie.calorieCount, 0)
    );
  }, [caloriesByUser]);
  function viewPieChart() {
    console.log("GET DATA");
    let temp = [];
    if (breakfast !== 0) {
      temp.push({ title: "Breakfast", value: breakfast, color: "#276bf2" });
    }
    if (lunch !== 0) {
      temp.push({ title: "Lunch", value: lunch, color: "#93aefd" });
    }
    if (snack !== 0) {
      temp.push({ title: "Snack", value: snack, color: "#8598c7" });
    }
    if (dinner !== 0) {
      temp.push({ title: "Dinner", value: dinner, color: "#00488f" });
    }
    setData(temp);
    setPieChartVisible(true);
  }
  return (
    <div>
      <center>
        <h1>
          Total calories consumed : {totalCalories}
        </h1>
        <div style={{ paddingTop: "2em" }}>
          <h3>Calorie Details</h3>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>Calorie Id</th>
                <th>Calorie Count</th>
                <th>Food Type</th>
                <th>Entry Date</th>
              </tr>
            </thead>
            <tbody>
              {caloriesByUser.map((calorie, i) => (
                <tr key={calorie.calorieId}>
                  <td>{calorie.calorieId}</td>
                  <td>{calorie.calorieCount}</td>
                  <td>{calorie.calorieFoodType}</td>
                  <td>{calorie.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>User Details</h3>
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
              <tr>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.userAge}</td>
                <td>{user.userAddress}</td>
                <td>{user.userGender}</td>
              </tr>
            </tbody>
          </Table>
          <div style={{ paddingTop: "2em" }}>
          <Button  onClick={viewPieChart}>
            View Pie Chart
          </Button>
          </div>
        </div>
        {!pieChartVisible ? (
          <div></div>
        ) : (
          
          <PieChart 
            
            label={(props) => {
              return props.dataEntry.title;
            }}
            labelStyle={{
              fontSize: "2px",
            }}
            animation
            animationDuration={500}
            animationEasing="ease-out"
            radius={20}
            totalValue={breakfast + lunch + dinner + snack}
            data={data}
          />
        )}
      </center>
    </div>
  );
}
