import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Comic Sans MS"
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: 600
  },
  tagLine: {
    marginBottom: "2rem"
  }
};

const useStyles = makeStyles(() => ({
  paper: {
    padding: "1rem",
    opacity: "0.8",
    width: "400px"
  },
  linkedin: {
    color: "#0072b1"
  },
  github: {
    color: "#6e5494"
  },
  youtube: {
    color: "#c4302b"
  },
  facebook: {
    color: "#3b5998"
  }
}));

function Contact() {
  const classes = useStyles();
  const icons = [
    <a href="https://www.linkedin.com/in/chawintan/" target="_blank">
      <LinkedInIcon fontSize="large" className={classes.linkedin} />
    </a>,
    <a href="https://github.com/ChawinTan" target="_blank">
      <GitHubIcon fontSize="large" className={classes.github} />
    </a>,
    <a
      href="https://www.youtube.com/channel/UCi8es9-zdylDTY3xJruzqLg?view_as=subscriber"
      target="_blank"
    >
      <YouTubeIcon fontSize="large" className={classes.youtube} />
    </a>,
    <a href="https://www.facebook.com/boring.square.73" target="_blank">
      <FacebookIcon fontSize="large" className={classes.facebook} />
    </a>,
    <a href="https://www.instagram.com/boaringsquare/" target="_blank">
      <InstagramIcon fontSize="large" />
    </a>
  ];

  return (
    <div style={styles.root}>
      <Paper className={classes.paper}>
        <div style={styles.heading}>Let's Connect</div>
        <div style={styles.tagLine}>
          Like minded or just want to collaborate? Find me on these Channels
        </div>
        <Grid
          container
          justify="center"
          direction="row"
          alignItems="center"
          spacing={4}
        >
          {icons.map((icon, index) => {
            return (
              <Grid item key={index}>
                {icon}
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}

export default Contact;
