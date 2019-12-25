import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";

import Instruments from "../Components/Instruments";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Instruments />
    </Router>,
    div
  );
});

describe("Instruments", () => {
  let container;
  let props = {
    addProduct: jest.fn(),
    removeProduct: jest.fn()
  };
  beforeEach(() => {
    container = shallow(<Instruments {...props} />);
  });

  test("it should change className on click FavoriteIcon", () => {
    const initialClassname = container.find("FavoriteIcon").prop("className");

    container.find("FavoriteIcon").simulate("click");
    const updatedClassname = container.find("FavoriteIcon").prop("className");

    expect(container.find("FavoriteIcon").prop("className")).not.toBe(
      initialClassname
    );

    container.find("FavoriteIcon").simulate("click");

    expect(container.find("FavoriteIcon").prop("className")).not.toBe(
      updatedClassname
    );
  });

  test("it should change quantity of select on select MenuItem", () => {
    const testEventAdd = { target: { value: 2 } };
    const testEventRemove = { target: { value: 0 } };

    container
      .find("#select-quantity")
      .at(1)
      .simulate("change", testEventAdd);

    expect(props.addProduct).toHaveBeenCalledTimes(1);

    container
      .find("#select-quantity")
      .at(1)
      .simulate("change", testEventRemove);

    expect(props.removeProduct).toHaveBeenCalledTimes(1);
  });
});
