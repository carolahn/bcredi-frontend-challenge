import React from "react";
import renderer from "react-test-renderer";

import RegisterFooter from "../index";

describe("RegisterFooter render test", () => {
  it("renders correctly RegisterFooter", () => {
    const tree = renderer.create(<RegisterFooter />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
