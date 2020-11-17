import React from "react";
import renderer from "react-test-renderer";

import EmailInput from "../index";

describe("EmailInput render test", () => {
  it("renders correctly EmailInput", () => {
    const tree = renderer
      .create(<EmailInput values={{}} register={() => {}} errors={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
