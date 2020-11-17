import React from "react";
import renderer from "react-test-renderer";

import CpfInput from "../index";

describe("CpfInput render test", () => {
  it("renders correctly CpfInput", () => {
    const tree = renderer
      .create(<CpfInput values={{}} register={() => {}} errors={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
