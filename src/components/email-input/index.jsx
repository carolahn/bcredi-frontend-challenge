import React from "react";
import { StyledInput } from "../register-form/styled";

const EmailInput = ({ register, handleOnChange, errors }) => {
  return (
    <div className="register__input-wrapper">
      <label className="register__label">E-mail</label>
      <StyledInput
        width="320px"
        className="register__input"
        placeholder="exemplo@email.com"
        name="email"
        onChange={handleOnChange}
        ref={register({
          required: "O campo e-mail é obrigatório",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "E-mail inválido",
          },
        })}
        style={{
          border: `1px solid ${!errors.email ? "#e6e6e6" : "#ff5863"}`,
          color: `${!errors.email ? "#333333" : "#ff5863"}`,
        }}
      />
      {errors.email && (
        <div className="register__message">{errors.email.message}</div>
      )}
    </div>
  );
};

export default EmailInput;
