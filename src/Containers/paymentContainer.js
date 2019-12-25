import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Payment from "../Components/Payment";

export const mapStateToProps = state => {
  return {
    selectedItems: {
      apparel: state.apparelReducer,
      shoe: state.shoeReducer,
      gourmet: state.gourmetReducer,
      instrument: state.instrumentReducer
    }
  };
};

export default withRouter(connect(mapStateToProps, null)(Payment));
