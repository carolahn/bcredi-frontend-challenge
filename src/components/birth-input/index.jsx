import React from "react";
import { StyledInput, StyledMessage } from "../register-form/styled";
import { birthMask } from "../register-form/masks";
import { birthValidator } from "../register-form/validator";

const BirthInput = ({ register, errors, applyMask, values }) => {
  return (
    <div className="register__small-input-container">
      <label className="register__label register__label--small">
        Data de nascimento
      </label>
      <StyledInput
        width="148px"
        className="register__input--small"
        placeholder="DD/MM/AAAA"
        maxLength={10}
        name="birth"
        value={values.birth}
        onChange={(event) =>
          applyMask(birthMask(event.target.value), event.target.name)
        }
        ref={register({
          validate: {
            required: (value) => {
              applyMask(value, "birth");
              return value !== "" || "Campo obrigatório";
            },
            pattern: (value) => {
              applyMask(value, "birth");
              return birthValidator(value) || "Data inválida";
            },
          },
        })}
        style={{
          border: `1px solid ${!errors.birth ? "#e6e6e6" : "#ff5863"}`,
          color: `${!errors.birth ? "#333333" : "#ff5863"}`,
        }}
      />
      {errors.birth && (
        <StyledMessage className="register__message" top="100px">
          {errors.birth.message}
        </StyledMessage>
      )}
    </div>
  );
};

export default BirthInput;
