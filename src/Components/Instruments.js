import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Instruments() {
  return (
    <div style={styles.root}>
      <div>Instruments</div>
    </div>
  );
}

export default Instruments;
