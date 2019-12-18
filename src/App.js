import React from "react";
import { Switch, Route } from "react-router-dom";

import AppTopBar from "./Components/AppBar";
import SideMenu from "./Components/SideMenu";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Apparel from "./Containers/apparelContainer";
import Payment from "./Containers/paymentContainer";
import Shoes from "./Containers/shoesContainer";
import Gourmet from "./Containers/gourmetContainer";
import Instruments from "./Containers/instrumentsContainer";
import WishList from "./Containers/wishlistContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppTopBar />
      <SideMenu />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/apparel"} component={Apparel} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/gourmet"} component={Gourmet} />
        <Route path={"/instruments"} component={Instruments} />
        <Route path={"/payment"} component={Payment} />
        <Route path={"/shoes"} component={Shoes} />
        <Route path={"/wishlist"} component={WishList} />
      </Switch>
    </div>
  );
}

export default App;
