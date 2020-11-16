import React from "react";
import { shallow } from "enzyme";
import RegisterFormContainer from "../index";
import RegisterForm from "../../../components/register-form";

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
});
