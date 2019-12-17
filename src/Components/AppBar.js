import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PaymentIcon from "@material-ui/icons/Payment";
import ListIcon from "@material-ui/icons/List";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    letterSpacing: 3,
    fontFamily: "Comic Sans MS",
    fontWeight: 600
  },
  icons: {
    color: "#ffffff"
  }
}));

const styles = {
  appBar: {
    backgroundColor: "#cead00"
  }
};

function AppTopBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={styles.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Owl Shop
          </Typography>
          <IconButton>
            <ListIcon className={classes.icons} />
          </IconButton>
          <IconButton>
            <PaymentIcon className={classes.icons} />
          </IconButton>
          <IconButton>
            <ContactSupportIcon className={classes.icons} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppTopBar;
