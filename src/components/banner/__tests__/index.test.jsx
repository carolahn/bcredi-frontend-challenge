import React from "react";
import renderer from "react-test-renderer";

import Banner from "../index";

describe("Render Test", () => {
  it("renders correctly Banner", () => {
    const tree = renderer.create(<Banner />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
