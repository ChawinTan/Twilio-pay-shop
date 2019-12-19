import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paperHeading: {
    marginBottom: "0.4rem",
    fontWeight: "bold",
    fontSize: "1.5rem"
  },
  paperBody: {
    color: "#333333"
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
    fontFamily: "Comic Sans MS",
    width: "500px",
    opacity: "0.7"
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div style={styles.root}>
      <Paper className={classes.root}>
        <div style={styles.paperHeading}>Welcome to Owl Shop</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          ornare massa. Pellentesque nec pellentesque purus. In hac habitasse
          platea dictumst. Fusce ullamcorper facilisis justo egestas
          ullamcorper. Nam tincidunt aliquet neque a pulvinar. Quisque tristique
          velit metus. Nullam sit amet orci hendrerit, auctor enim at, dignissim
          nibh. Nunc vehicula nec tellus vitae gravida. Curabitur convallis
          magna leo, sit amet fringilla ipsum facilisis eu.
        </div>
      </Paper>
    </div>
  );
}

export default Home;
