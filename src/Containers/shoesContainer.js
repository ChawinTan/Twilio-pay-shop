import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Shoes from "../Components/Shoes";

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shoes));
