import React from "react";
import renderer from "react-test-renderer";

import CheckboxInput from "../index";

describe("CheckboxInput render test", () => {
  it("renders correctly CheckboxInput", () => {
    const tree = renderer
      .create(<CheckboxInput values={{}} register={() => {}} errors={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
