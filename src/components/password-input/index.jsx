import React from "react";
import { StyledInput } from "../register-form/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const PasswordInput = ({
  register,
  handleOnChange,
  errors,
  togglePassword,
  showPassword,
  applyMask,
  values,
}) => {
  return (
    <div className="register__input-wrapper">
      <label className="register__label">Senha</label>
      <div className="register__input--toggle-eye">
        <StyledInput
          width="320px"
          className="register__input"
          placeholder="Cadastre uma senha"
          name="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleOnChange}
          ref={register({
            validate: {
              required: (value) => {
                applyMask(value, "password");
                return value !== "" || "Cadastre uma senha";
              },
              pattern: (value) => {
                applyMask(value, "password");
                return (
                  value.length > 7 ||
                  "A senha deve conter, no mínimo, 8 caracteres"
                );
              },
            },
          })}
          style={{
            border: `1px solid ${!errors.password ? "#e6e6e6" : "#ff5863"}`,
            color: `${!errors.password ? "#333333" : "#ff5863"}`,
          }}
        />
        <i className="register__icon--eye" onClick={togglePassword}>
          {eye}
        </i>
      </div>
      {errors.password && (
        <div className="register__message">{errors.password.message}</div>
      )}
    </div>
  );
};

export default PasswordInput;
