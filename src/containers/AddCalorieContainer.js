import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { AddCalorieComponent } from "../components/AddCalorieComponent";
import { saveCalorie } from "../actions/calorieActions";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function AddUserContainer({users,actions}) {
  return (
    <Jumbotron>
      <AddCalorieComponent users={users} actions={actions}/>
    </Jumbotron>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ saveCalorie }, dispatch),
});

AddUserContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
