import Apparel1 from "./Assets/apparal_1.jpg";
import Apparel2 from "./Assets/apparal_2.jpg";
import Apparel3 from "./Assets/apparal_3.jpg";
import Apparel4 from "./Assets/apparal_4.jpg";
import Shoe1 from "./Assets/shoe_1.jpg";
import Shoe2 from "./Assets/shoe_2.jpg";
import Shoe3 from "./Assets/shoe_3.jpg";
import food1 from "./Assets/food_1.jpg";
import food2 from "./Assets/food_2.jpg";
import food3 from "./Assets/food_3.jpg";
import violin1 from "./Assets/violin_1.jpeg";
import violin2 from "./Assets/violin_2.jpg";
import violin3 from "./Assets/violin_3.jpg";
import twilio from "./Assets/twilio.jpg";
import stripe from "./Assets/stripe.png";

const appConstants = {
  drawerWidth: 240,
  productStyle: {
    root: {
      marginLeft: "240px",
      fontFamily: "Comic Sans MS",
      padding: "0 2rem"
    },
    header: {
      textAlign: "center",
      marginTop: "1.5rem",
      fontSize: "1.5rem"
    },
    input: {
      outline: 0,
      border: 0,
      borderBottom: "1px solid rgb(63, 156, 113)",
      fontSize: "0.8rem",
      width: "100px"
    }
  },
  apparel: [
    {
      picture: Apparel1,
      text: "Comfy Shirt",
      price: 10
    },
    {
      picture: Apparel2,
      text: "Comfy Jeans",
      price: 15
    },
    {
      picture: Apparel3,
      text: "Comfy Sweater",
      price: 10
    },
    {
      picture: Apparel4,
      text: "Warm Scarfs",
      price: 5
    }
  ],
  shoe: [
    {
      picture: Shoe1,
      text: "Bouncy Shoe",
      price: 8
    },
    {
      picture: Shoe2,
      text: "Fast Shoe",
      price: 11
    },
    {
      picture: Shoe3,
      text: "Nice Shoe",
      price: 9
    }
  ],
  gourmet: [
    {
      picture: food1,
      text: "Macaroons",
      price: 5
    },
    {
      picture: food2,
      text: "Muffins",
      price: 4
    },
    {
      picture: food3,
      text: "Ice Cream",
      price: 3
    }
  ],
  instruments: [
    {
      picture: violin1,
      text: "Copy Cat",
      price: 100
    },
    {
      picture: violin2,
      text: "Ling Ling",
      price: 120
    },
    {
      picture: violin3,
      text: "sacrilegious",
      price: 40
    }
  ],
  about: {
    twilio: {
      picture: twilio
    },
    stripe: {
      picture: stripe
    }
  },
  outBoundUrl: "url for outbound call",
  wishlistUrl: "url for outbound sms"
};

export default appConstants;
