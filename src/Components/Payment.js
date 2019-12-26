import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import appConstants from "../constants";

const drawerWidth = appConstants.drawerWidth;
const styles = {
  root: {
    marginLeft: `${drawerWidth}px`,
    fontFamily: "Comic Sans MS"
  },
  heading: {
    marginTop: "1rem",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  paymentHeading: {
    fontSize: "1.3rem"
  },
  instructions: {
    fontWeight: 700
  }
};

const useStyles = makeStyles(() => ({
  list: {
    padding: "1rem 0.3rem"
  },
  listItemText: {
    width: "120px",
    padding: "0 5px"
  },
  grid: {
    marginTop: "0.5rem"
  },
  paper: {
    opacity: 0.8
  },
  paymentPaper: {
    opacity: 0.8,
    padding: "1rem"
  },
  paymentList: {
    backgroundColor: "#e9e9e9",
    margin: "1rem 0"
  },
  outboundPaymentPaper: {
    opacity: 0.8,
    marginTop: "1rem",
    padding: "1rem"
  },
  callButton: {
    marginTop: "1rem"
  }
}));

function Payment(props) {
  const classes = useStyles();

  const { selectedItems } = props;
  const [finalPrice, setFinalPrice] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [number, setNumber] = useState("");

  const paymentInstructions = [
    "1. Credit Card Number - 4242 4242 4242 4242",
    "2. Expiry date - some date in the future",
    "3. Zip code: 94105",
    "4. CVC security code: 333"
  ];
  const errorCards = [
    "1. 4100 0000 0000 0019 - Card declined",
    "2. 4000 0000 0000 9995 - Card has insufficient funds",
    "3. 4000 0000 0000 0069 - Card expired"
  ];

  const onChangeNumber = event => {
    setNumber(event.target.value);
  };

  const callTwilio = () => {
    fetch(appConstants.outBoundUrl, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        number: number,
        amount: finalPrice
      })
    })
      .then(res => res.json())
      .then(json => console.log(json));
  };

  useEffect(() => {
    const objKeys = Object.keys(selectedItems);
    let finalPriceHolder = 0;
    let itemListHolder = [];

    objKeys.forEach(key => {
      if (selectedItems[key].length > 0) {
        selectedItems[key].forEach(item => {
          finalPriceHolder += item.qty * item.price;
          const itemHolder = {
            item: item.item,
            qty: item.qty,
            price: item.qty * item.price
          };
          itemListHolder = [...itemListHolder, itemHolder];
        });
      }
    });
    setFinalPrice(finalPriceHolder);
    setItemList(itemListHolder);
  }, [selectedItems]);

  return (
    <div style={styles.root}>
      <div style={styles.heading}>Pay With Twilio and Stripe!</div>
      <Grid
        className={classes.grid}
        container
        justify="center"
        direction="row"
        spacing={4}
      >
        <Grid key="bill" item>
          <Paper className={classes.paper}>
            <List className={classes.list}>
              <ListItem>
                <ListItemText
                  className={classes.listItemText}
                  disableTypography
                  primary="Item"
                />
                <ListItemText
                  className={classes.listItemText}
                  disableTypography
                  primary="Quantity"
                />
                <ListItemText
                  className={classes.listItemText}
                  disableTypography
                  primary="Price"
                />
              </ListItem>
              <Divider />
              {itemList.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        className={classes.listItemText}
                        disableTypography
                        primary={item.item}
                      />
                      <ListItemText
                        className={classes.listItemText}
                        disableTypography
                        primary={item.qty}
                      />
                      <ListItemText
                        className={classes.listItemText}
                        disableTypography
                        primary={`$${item.price}`}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
              <ListItem>
                <ListItemText
                  className={classes.listItemText}
                  disableTypography
                  primary="Total"
                />
                <ListItemText
                  className={classes.listItemText}
                  disableTypography
                  primary=""
                />
                <ListItemText
                  className={classes.listItemText}
                  disableTypography
                  primary={`$${finalPrice}`}
                />
              </ListItem>
            </List>
          </Paper>

          <Paper className={classes.outboundPaymentPaper}>
            <div style={styles.paymentHeading}>Enter your phone number</div>
            <TextField
              label="Enter phone number..."
              onChange={onChangeNumber}
            />
            <div className={classes.callButton}>
              <Button variant="contained" color="primary" onClick={callTwilio}>
                Call!
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid key="payment" item>
          <Paper className={classes.paymentPaper}>
            <div style={styles.paymentHeading}>Making Payment ...</div>
            <div style={styles.instructions}>
              Instructions for making payment:
            </div>
            <List className={classes.paymentList}>
              {paymentInstructions.map((instruction, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText disableTypography primary={instruction} />
                  </ListItem>
                );
              })}
            </List>
            <div style={styles.instructions}>
              Stripe provide other cards for error handling:
            </div>
            <List className={classes.paymentList}>
              {errorCards.map((card, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText disableTypography primary={card} />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Payment;
