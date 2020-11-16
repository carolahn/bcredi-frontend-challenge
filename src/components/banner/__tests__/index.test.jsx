import React from "react";
import renderer from "react-test-renderer";

import Banner from "../index";

describe("banner render test", () => {
  it("renders correctly Banner", () => {
    const tree = renderer.create(<Banner />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
