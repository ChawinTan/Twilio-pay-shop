import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Payment() {
  return (
    <div style={styles.root}>
      <div>Payment</div>
    </div>
  );
}

export default Payment;
