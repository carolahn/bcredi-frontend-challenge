import React from "react";
import { shallow } from "enzyme";

import Register from "../index";
import RegisterContainer from "../../../containers/register-form";
import Banner from "../../../components/banner";

describe("Render Test", () => {
  it("renders Register with RegisterContainer", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find(RegisterContainer)).toBeTruthy();
  });

  it("renders Register with Banner", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find(Banner)).toBeTruthy();
  });
});
