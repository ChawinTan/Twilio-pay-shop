import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Apparel from "../Components/Apparel";

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Apparel)
);
