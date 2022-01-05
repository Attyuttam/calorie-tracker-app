import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadUsers } from "../actions/userActions";
import { UsersListComponent } from "../components/UsersListComponent";
import Jumbotron from "react-bootstrap/Jumbotron";

const UsersListContainer = ({ users, actions }) => (
  <Jumbotron>
    <UsersListComponent users={users} actions={actions} />
  </Jumbotron>
);

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadUsers }, dispatch),
});

UsersListContainer.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
