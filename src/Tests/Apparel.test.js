import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";

import Apparel from "../Components/Apparel";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Apparel />
    </Router>,
    div
  );
});

test("it should change className on click FavoriteIcon", () => {
  const container = shallow(<Apparel />);
  const initialClassname = container.find("FavoriteIcon").prop("className");

  container.find("FavoriteIcon").simulate("click");

  expect(container.find("FavoriteIcon").prop("className")).not.toBe(
    initialClassname
  );
});
