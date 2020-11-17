import React from "react";
import renderer from "react-test-renderer";

import PasswordInput from "../index";

describe("PasswordInput render test", () => {
  it("renders correctly PasswordInput", () => {
    const tree = renderer
      .create(<PasswordInput values={{}} register={() => {}} errors={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
