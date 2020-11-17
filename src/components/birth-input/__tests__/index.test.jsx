import React from "react";
import renderer from "react-test-renderer";

import BirthInput from "../index";

describe("BirthInput render test", () => {
  it("renders correctly BirthInput", () => {
    const tree = renderer
      .create(<BirthInput values={{}} register={() => {}} errors={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
