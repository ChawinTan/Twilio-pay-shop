import React from "react";
import ReactDOM from "react-dom";

import SideMenu from "../Components/SideMenu";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SideMenu />, div);
});
