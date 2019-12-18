import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Home() {
  return (
    <div style={styles.root}>
      <div>Home</div>
    </div>
  );
}

export default Home;
