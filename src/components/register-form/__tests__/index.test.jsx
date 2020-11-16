import React from "react";
import renderer from "react-test-renderer";

import RegisterForm from "../index";

jest.mock("react-hook-form", () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((func) => func),
    errors: {},
    setError: jest.fn(),
  }),
}));

describe("register-form render test", () => {
  it("renders correctly RegisterForm", () => {
    const tree = renderer
      .create(
        <RegisterForm
          values={{}}
          onSubmit={() => {}}
          formErrors={{
            register: () => {},
            handleSubmit: () => {},
            errors: {},
          }}
          handleOnChange={() => {}}
          applyMask={() => {}}
          togglePassword={() => {}}
          showPassword={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
