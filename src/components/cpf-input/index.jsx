import React from "react";
import { StyledInput, StyledMessage } from "../register-form/styled";
import { cpfMask } from "../register-form/masks";
import { cpfValidator } from "../register-form/validator";

const CpfInput = ({ register, errors, applyMask, values }) => {
  return (
    <div className="register__small-input-container">
      <label className="register__label register__label--small">CPF</label>
      <StyledInput
        width="148px"
        className="register__input--small"
        placeholder="000.000.000-00"
        maxLength={18}
        name="cpf"
        value={values.cpf}
        onChange={(event) =>
          applyMask(cpfMask(event.target.value), event.target.name)
        }
        ref={register({
          validate: {
            required: (value) => {
              applyMask(value, "cpf");
              return value !== "" || "Campo obrigatório";
            },
            pattern: (value) => {
              applyMask(value, "cpf");
              return cpfValidator(value) || "CPF inválido";
            },
          },
        })}
        style={{
          border: `1px solid ${!errors.cpf ? "#e6e6e6" : "#ff5863"}`,
          color: `${!errors.cpf ? "#333333" : "#ff5863"}`,
        }}
      />
      {errors.cpf && (
        <StyledMessage className="register__message" top="100px">
          {errors.cpf.message}
        </StyledMessage>
      )}
    </div>
  );
};

export default CpfInput;
