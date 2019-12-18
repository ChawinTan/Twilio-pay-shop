import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function About() {
  return (
    <div style={styles.root}>
      <div>About</div>
    </div>
  );
}

export default About;
