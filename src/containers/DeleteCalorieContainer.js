import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCalorie } from "../actions/calorieActions";
import PropTypes from "prop-types";
import {DeleteCalorieComponent} from "../components/DeleteCalorieComponent";

export function DeleteCalorieContainer({ users,calories, actions }) {
  
  return (
    <Jumbotron>
      <DeleteCalorieComponent users={users} calories={calories} actions={actions} />
    </Jumbotron>
  );
}
const mapStateToProps = (state) => ({
  calories: state.calories,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ deleteCalorie }, dispatch),
});

DeleteCalorieContainer.propTypes = {
  users: PropTypes.array.isRequired,
  calories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCalorieContainer);
