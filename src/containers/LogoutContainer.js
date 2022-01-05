import PropTypes from "prop-types";
import {logout} from "../actions/loginLogoutActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function LogoutContainer({actions}) {
  const {logout} = actions;
   logout();
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout }, dispatch),
});

LogoutContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(LogoutContainer);