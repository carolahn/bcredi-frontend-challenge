import RegisterFormContainer from "../../containers/register-form";
import { StyledForm, StyledInput, StyledInputSmall } from "./styled";
import { cpfMask } from "./masks";

const RegisterForm = ({
  values,
  onSubmit,
  formErrors: { register, handleSubmit, errors },
  handleOnChange,
  handleMask,
}) => {
  return (
    <StyledForm name="register" onSubmit={handleSubmit(onSubmit)}>
      <label className="register__label">E-mail</label>
      <StyledInput
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

      <label className="register__label register__label--small">CPF</label>
      <StyledInputSmall
        className="register__input--small"
        placeholder="998.767.888-70"
        maxLength={18}
        name="cpf"
        value={values.cpf}
        onChange={(event) =>
          handleMask(cpfMask(event.target.value), event.target.name)
        }
        ref={register({
          validate: {
            required: (value) => {
              handleMask(value, "cpf");
              return value !== "" || "Campo obrigatório";
            },
            pattern: (value) => {
              handleMask(value, "cpf");
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
        <div className="register__message">{errors.cpf.message}</div>
      )}

      <button>Cadastrar</button>
    </StyledForm>
  );
};

export default RegisterForm;
