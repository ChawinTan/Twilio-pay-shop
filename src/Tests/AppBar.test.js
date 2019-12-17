import React from "react";
import ReactDOM from "react-dom";

import AppTopBar from "../Components/AppBar";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppTopBar />, div);
});
