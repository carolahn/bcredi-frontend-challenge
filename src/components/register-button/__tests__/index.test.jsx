import React from "react";
import renderer from "react-test-renderer";

import RegisterButton from "../index";

describe("RegisterButton render test", () => {
  it("renders correctly RegisterButton", () => {
    const tree = renderer.create(<RegisterButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
