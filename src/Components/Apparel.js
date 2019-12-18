import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Apparel() {
  return (
    <div style={styles.root}>
      <div>Apparel</div>
    </div>
  );
}

export default Apparel;
