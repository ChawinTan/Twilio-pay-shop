import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";

import Contact from "../Components/Contact";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Contact />
    </Router>,
    div
  );
});
