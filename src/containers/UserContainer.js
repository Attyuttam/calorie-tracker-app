import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import { UserComponent } from "../components/UserComponent";

const UserContainer = ({calories,users,match}) => (
  <Jumbotron>
    <UserComponent userId={match.params.userId} users={users} calories={calories} />
  </Jumbotron>
);

const mapStateToProps = (state) => ({
  calories: state.calories,
  users: state.users,
});


UserContainer.propTypes = {
  calories: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,

};


export default connect(mapStateToProps, null)(UserContainer);
