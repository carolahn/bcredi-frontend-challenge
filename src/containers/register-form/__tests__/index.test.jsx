import React, { useState } from "react";
import Enzyme, { shallow, mount } from "enzyme";
import RegisterFormContainer from "../index";
import RegisterForm from "../../../components/register-form";
import RegisterFooter from "../../../components/register-footer";
import { ConfirmationMessage } from "../styled";
import { useDispatch } from "react-redux";

jest.mock("react-hook-form", () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((func) => func),
    errors: {},
    setError: jest.fn(),
    reset: jest.fn(),
  }),
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (state) => [state, jest.fn()],
  useEffect: jest.fn(),
}));

jest.mock("../../../redux/actions/user", () => ({
  user: jest.fn(),
}));

jest.mock("bcryptjs", () => ({ hashSync: jest.fn() }));

describe("Render Test", () => {
  it("renders correctly RegisterFormContainer", () => {
    const wrapper = shallow(<RegisterFormContainer />);
    expect(wrapper.find(RegisterForm)).toBeTruthy();
  });

  it("renders correctly RegisterFooter", () => {
    const wrapper = shallow(<RegisterFormContainer />);
    expect(wrapper.find(RegisterFooter)).toBeTruthy();
  });

  it("renders correctly ConfirmationMessage", () => {
    const wrapper = shallow(<RegisterFormContainer />);
    expect(wrapper.find(ConfirmationMessage)).toBeTruthy();
  });
});
