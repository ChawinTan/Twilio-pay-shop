import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Paper from "@material-ui/core/Paper";

import appConstants from "../constants";

const about = appConstants.about;
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
    fontSize: "1.5rem"
  }
};

const useStyles = makeStyles(() => ({
  cardMedia: {
    width: "300px",
    height: "150px"
  },
  Icon: {
    fontSize: "5rem",
    color: "#ffffff",
    opacity: 0.7
  },
  paper: {
    width: "400px",
    padding: "1rem",
    opacity: 0.8
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div style={styles.root}>
      <Grid
        container
        justify="center"
        direction="row"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
            spacing={0}
          >
            <Grid item>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  alt={"twilio"}
                  image={about.twilio.picture}
                />
              </Card>
            </Grid>
            <Grid item>
              <AddIcon className={classes.Icon} />
            </Grid>
            <Grid item>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  alt={"Stripe"}
                  image={about.stripe.picture}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <ArrowForwardIcon className={classes.Icon} />
        </Grid>

        <Grid item>
          <Paper className={classes.paper}>
            <div style={styles.heading}>About</div>
            <hr />
            <div>
              Millions of developers around the world have used Twilio to unlock
              the magic of communications to improve any human experience.
              Twilio has democratized communications channels like voice, text,
              chat, video, and email by virtualizing the world’s communications
              infrastructure through APIs that are simple enough for any
              developer to use, yet robust enough to power the world’s most
              demanding applications.
            </div>
            <div>
              To find out more, please visit our{" "}
              <a href="https://www.twilio.com/docs/voice/tutorials/how-capture-your-first-payment-using-pay">
                documentation
              </a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
