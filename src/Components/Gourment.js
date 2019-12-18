import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Gourmet() {
  return (
    <div style={styles.root}>
      <div>Gourmet</div>
    </div>
  );
}

export default Gourmet;
