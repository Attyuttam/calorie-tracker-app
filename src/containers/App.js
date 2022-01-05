import React from "react";
import Header from "../common/Header";
import { HomePage } from "../components/HomePage";
import CaloriesListContainer from "./CaloriesListContainer";
import UsersListContainer from "./UsersListContainer";
import AddCalorieContainer from "./AddCalorieContainer";
import UpdateUserContainer from "./UpdateUserContainer";
import UpdateCalorieContainer from "./UpdateCalorieContainer";
import DeleteCalorieContainer from "./DeleteCalorieContainer";
import DeleteUserContainer from "./DeleteUserContainer";
import { NotFoundPage } from "../components/NotFoundPage";
import { UpdateUserComponent } from "../components/UpdateUserComponent";
import LogoutContainer from "./LogoutContainer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import UserContainer from "./UserContainer";

export const App = () => {
  return (
    <Router>
      <Jumbotron fluid>
        <Header />
        <Redirect to="/home" />
        <Switch>
          <Route path="/home" component={(props) => <HomePage {...props} />} />

          <Route
            path="/users"
            component={(props) => <UsersListContainer {...props} />}
          />

          <Route
            path="/updateUser/:userId"
            component={(props) => <UpdateUserComponent {...props} />}
          />
          <Route
            path="/updateUser"
            component={(props) => <UpdateUserContainer {...props} />}
          />

          <Route
            path="/calories"
            component={(props) => <CaloriesListContainer {...props} />}
          />
          <Route
            path="/addCalorie"
            component={(props) => <AddCalorieContainer {...props} />}
          />

          <Route
            path="/updateCalorieEntry"
            component={(props) => <UpdateCalorieContainer {...props} />}
          />

          <Route
            path="/deleteCalorieEntry"
            component={(props) => <DeleteCalorieContainer {...props} />}
          />
          <Route
            path="/deleteUser"
            component={(props) => <DeleteUserContainer {...props} />}
          />
          <Route
            path="/calorieDetailsForUser/:userId"
            component={(props) => <UserContainer {...props} />}
          />
          <Route
            path="/logout"
            component={(props) => <LogoutContainer {...props} />}
          />
          <Route path="*" comonent={(props) => <NotFoundPage {...props} />} />
        </Switch>
      </Jumbotron>
    </Router>
  );
};
