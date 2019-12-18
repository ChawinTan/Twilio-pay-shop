import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Shoes() {
  return (
    <div style={styles.root}>
      <div>Shoes</div>
    </div>
  );
}

export default Shoes;
