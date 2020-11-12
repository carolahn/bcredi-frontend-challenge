import React from "react";
import Banner from "../../components/banner";
import RegisterFormContainer from "../../containers/register-form";
import { RegisterWrapper } from "./styled";

const Register = () => {
  return (
    <RegisterWrapper className="register">
      <Banner />
      <RegisterFormContainer />
    </RegisterWrapper>
  );
};

export default Register;
