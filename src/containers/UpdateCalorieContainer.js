import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCalorie } from "../actions/calorieActions";
import PropTypes from "prop-types";
import {UpdateSingleCalorieComponent} from "../components/UpdateSingleCalorieComponent";

export function UpdateCalorieContainer({ users,calories, actions }) {
  
  return (
    <Jumbotron>
      <UpdateSingleCalorieComponent users={users} calories={calories} actions={actions} />
    </Jumbotron>
  );
}
const mapStateToProps = (state) => ({
  calories: state.calories,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ updateCalorie }, dispatch),
});

UpdateCalorieContainer.propTypes = {
  users: PropTypes.array.isRequired,
  calories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCalorieContainer);
