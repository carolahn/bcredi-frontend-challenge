import {
  StyledForm,
  StyledInput,
  StyledInputSmall,
  StyledMessage,
  CheckboxContainer,
  StyledButton,
} from "./styled";
import { cpfMask, birthMask } from "./masks";
import { birthValidator } from "./validator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const lock = <FontAwesomeIcon icon={faLock} />;

const RegisterForm = ({
  values,
  onSubmit,
  formErrors: { register, handleSubmit, errors },
  handleOnChange,
  applyMask,
  togglePassword,
  showPassword,
}) => {
  return (
    <StyledForm name="register" onSubmit={handleSubmit(onSubmit)}>
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

      <div className="register__container">
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
                  return (
                    value.match(
                      /(^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$)|(^\d{2}\.?\d{3}\.?\d{3}\/\d{4}-?\d{2}$)/i
                    ) || "CPF inválido"
                  );
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
      </div>

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

      <StyledButton>
        <i className="register__icon--lock">{lock}</i>Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
