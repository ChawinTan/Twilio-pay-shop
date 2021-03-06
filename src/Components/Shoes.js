import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import appConstants from "../constants";

const shoes = appConstants.shoe;
const qtyState = new Array(shoes.length).fill(0);

const styles = appConstants.productStyle;
const useStyle = makeStyles(() => ({
  iconUnSub: {
    color: "#000000",
    opacity: 0.7
  },
  iconSub: {
    color: "#ff1a1a",
    opacity: 0.7
  },
  cardMedia: {
    width: "300px",
    height: "200px"
  }
}));

function Shoes(props) {
  const classes = useStyle();

  const { addProduct, removeProduct, subscribeProduct } = props;
  const [subscribe, setSubscribe] = useState(false);
  const handleSubscribe = () => {
    if (subscribe) {
      setSubscribe(false);
      subscribeProduct("SHOE_UNSUBSCRIBE", false);
    } else {
      setSubscribe(true);
      subscribeProduct("SHOE_SUBSCRIBE", true);
    }
  };

  const handleChangeShoe = (event, index) => {
    const selectedShoe = shoes[index];
    const quantity = event.target.value;
    if (quantity === 0) {
      removeProduct("REMOVE_SHOE", selectedShoe);
    } else {
      addProduct("ADD_SHOE", { selected: selectedShoe, quantity: quantity });
    }
    qtyState[index] = quantity;
  };

  return (
    <div style={styles.root}>
      <div style={styles.header}>Shoes</div>
      <Grid
        container
        justify="center"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Grid key="text" item>
          Click here to subscribe
        </Grid>
        <Grid key="icon" item>
          <FavoriteIcon
            onClick={handleSubscribe}
            className={subscribe ? classes.iconSub : classes.iconUnSub}
          />
        </Grid>
      </Grid>

      <Grid key={"itemList"} container justify="flex-start" spacing={7}>
        {shoes.map((item, index) => {
          return (
            <Grid key={index} item>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  alt={item.text}
                  image={item.picture}
                />
                <CardContent>
                  <Grid
                    container
                    justify="flex-start"
                    direction="row"
                    spacing={5}
                  >
                    <Grid item>{item.text}</Grid>
                    <Grid item>
                      {`Price: $`}
                      {item.price}
                    </Grid>
                  </Grid>
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="Quantity">Quantity</InputLabel>
                      <Select
                        labelId="Quantity"
                        id="select-quantity"
                        value={qtyState[index]}
                        onChange={event => handleChangeShoe(event, index)}
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Shoes;
