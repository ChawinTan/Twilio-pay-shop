import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Wishlist() {
  return (
    <div style={styles.root}>
      <div>Wishlist</div>
    </div>
  );
}

export default Wishlist;
