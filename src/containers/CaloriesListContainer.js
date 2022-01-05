import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadCalories } from "../actions/calorieActions";
import { CaloriesListComponent } from "../components/CaloriesListComponent";
import Jumbotron from "react-bootstrap/Jumbotron";

const CaloriesListContainer = ({ users, calories, actions }) => (
  <Jumbotron>
    <CaloriesListComponent calories={calories} users={users} actions={actions} />
  </Jumbotron>
);

const mapStateToProps = (state) => ({
  calories: state.calories,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadCalories }, dispatch),
});

CaloriesListContainer.propTypes = {
  calories: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesListContainer);
