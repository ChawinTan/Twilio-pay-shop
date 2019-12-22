import Apparel1 from "./Assets/apparal_1.jpg";
import Apparel2 from "./Assets/apparal_2.jpg";
import Apparel3 from "./Assets/apparal_3.jpg";
import Apparel4 from "./Assets/apparal_4.jpg";
import Shoe1 from "./Assets/shoe_1.jpg";
import Shoe2 from "./Assets/shoe_2.jpg";
import Shoe3 from "./Assets/shoe_3.jpg";

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
  ]
};

export default appConstants;
