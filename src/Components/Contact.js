import React from "react";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`
  }
};

function Contact() {
  return (
    <div style={styles.root}>
      <div>Contact</div>
    </div>
  );
}

export default Contact;
