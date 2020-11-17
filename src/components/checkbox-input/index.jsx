import React from "react";
import { CheckboxContainer, StyledMessage } from "../register-form/styled";

const CheckboxInput = ({
  register,
  handleOnChange,
  errors,
  applyMask,
  values,
}) => {
  return (
    <CheckboxContainer
      style={{ border: `1px solid ${!errors.agree ? "#e6e6e6" : "#ff5863"}` }}
    >
      <input
        width="320px"
        className="register__input--checkbox"
        name="agree"
        type="checkbox"
        value={values.agree}
        onChange={handleOnChange}
        ref={register({
          validate: {
            required: (value) => {
              applyMask(value, "agree");
              return value !== false || "Confirme os termos de uso";
            },
          },
        })}
        style={{
          border: `1px solid ${!errors.agree ? "#e6e6e6" : "#ff5863"}`,
          color: `${!errors.agree ? "#333333" : "#ff5863"}`,
        }}
      />
      <span className="register__checkbox-label">
        Li e estou de acordo com a{" "}
        <a
          href="#politica-de-privacidade"
          title="Política de privacidade da Bcredi"
        >
          Política de Privacidade
        </a>{" "}
        e a{" "}
        <a href="#politica-de-uso" title="Política de uso da Bcredi">
          Política de Uso de Informações
        </a>
        .
      </span>
      {errors.agree && (
        <StyledMessage className="register__message" top="59px" left="-1px">
          {errors.agree.message}
        </StyledMessage>
      )}
    </CheckboxContainer>
  );
};

export default CheckboxInput;
