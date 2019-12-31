import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`,
    fontFamily: "Comic Sans MS"
  },
  heading: {
    textAlign: "center",
    margin: "1rem 0",
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  updateInstruction: {
    fontWeight: 600
  },
  updateWrapper: {
    backgroundColor: "#e9e9e9",
    padding: "0.8rem"
  }
};

const useStyles = makeStyles(() => ({
  paper: {
    opacity: 0.8,
    padding: "1rem"
  },
  textField: {
    marginBottom: "1rem"
  }
}));

function Wishlist(props) {
  const classes = useStyles();
  const { wishlist } = props;
  const [wishedList, setWishedList] = useState([]);
  const [number, setNumber] = useState("");

  const wishDesc = {
    apparel: "- New Owl socks and skirts",
    gourmet: "- Tasty new chocolate snacks",
    instrument: "- New Ling Ling Insurance for practicing",
    shoe: "- New shoe that makes you run 5% faster"
  };

  useEffect(() => {
    const objKeys = Object.keys(wishlist);
    let holder = [];

    objKeys.forEach(key => {
      if (wishlist[key]) {
        holder = [...holder, key];
      }
    });

    setWishedList(holder);
  }, [wishlist]);

  const onChangeNumber = event => {
    setNumber(event.target.value);
  };

  const sendSms = () => {
    fetch(appConstants.wishlistUrl, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        number: number
      })
    });
  };

  return (
    <div style={styles.root}>
      <div style={styles.heading}>My Wishlist</div>
      <Grid
        container
        justify="center"
        direction="row"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Paper className={classes.paper}>
            <List>
              {wishedList.map((wish, index) => {
                return (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        disableTypography
                        primary={wish + " " + wishDesc[wish]}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
            <div style={styles.updateWrapper}>
              <div style={styles.updateInstruction}>
                Enter Number and click to get update via sms
              </div>
              <div>
                <TextField
                  className={classes.textField}
                  label="Enter phone number..."
                  onChange={onChangeNumber}
                />
              </div>
              <div>
                <Button variant="contained" color="primary" onClick={sendSms}>
                  Get Update
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Wishlist;
