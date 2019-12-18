import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Instruments from "../Components/Instruments";

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Instruments)
);
