import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUser } from "../actions/userActions";
import PropTypes from "prop-types";
import {UpdateSingleUserComponent} from "../components/UpdateSingleUserComponent";

export function UpdateUserContainer({ users, actions }) {
  return (
    <Jumbotron>
      <UpdateSingleUserComponent users={users} actions={actions} />
    </Jumbotron>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ updateUser }, dispatch),
});

UpdateUserContainer.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateUserContainer);
