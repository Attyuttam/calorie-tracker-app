import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { AddUserComponent } from "../components/AddUserComponent";
import { saveUser } from "../actions/userActions";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function AddUserContainer({actions}) {
  return (
    <Jumbotron>
      <AddUserComponent actions={actions}/>
    </Jumbotron>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ saveUser }, dispatch),
});

AddUserContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(AddUserContainer);
