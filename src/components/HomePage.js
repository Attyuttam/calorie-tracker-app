import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export const HomePage = () => (
  <Jumbotron>
    <center>
      <h1>Calorie Tracker Application</h1>
      <div style={{paddingTop: '2em'}}>
        <h5>
          Welcome to the calorie tracker application where you can keep track of
          the calories you consume daily. <br /> This will help you to keep
          track of your weight and thereby achieve yur weight goals and <br />{" "}
          also will help you to maintain a healthy body !
        </h5>
      </div>
    </center>
  </Jumbotron>
);
