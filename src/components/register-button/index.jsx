import React from "react";
import { StyledButton } from "../register-form/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const lock = <FontAwesomeIcon icon={faLock} />;

const RegisterButton = () => {
  return (
    <StyledButton className="register__button">
      <i className="register__icon--lock">{lock}</i>Cadastrar
    </StyledButton>
  );
};

export default RegisterButton;
