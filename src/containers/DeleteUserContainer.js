import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteUser } from "../actions/userActions";
import PropTypes from "prop-types";
import {DeleteUserComponent} from "../components/DeleteUserComponent";

export function DeleteUserContainer({ users,calories, actions }) {
  
  return (
    <Jumbotron>
      <DeleteUserComponent users={users} actions={actions} />
    </Jumbotron>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ deleteUser }, dispatch),
});

DeleteUserContainer.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteUserContainer);
