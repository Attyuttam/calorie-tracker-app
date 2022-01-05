import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./stores/configureStore";


import {App} from "./containers/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { loadCalories } from "./actions/calorieActions";
import { loadUsers } from "./actions/userActions";

const store = configureStore();
store.dispatch(loadCalories());
store.dispatch(loadUsers());
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={props => <App {...props} />} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
