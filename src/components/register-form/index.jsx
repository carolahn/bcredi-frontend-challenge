import RegisterFormContainer from "../../containers/register-form";
import { StyledForm, StyledInput } from "./styled";

const RegisterForm = ({
  values,
  onSubmit,
  formErrors: { register, handleSubmit, errors },
  handleOnChange,
  handleMaskOnChange,
}) => {
  return (
    <StyledForm name="register" onSubmit={handleSubmit(onSubmit)}>
      <label className="register__label">E-mail</label>
      <StyledInput
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
      <button>Cadastrar</button>
    </StyledForm>
  );
};

export default RegisterForm;
