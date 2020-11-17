import { StyledForm, StyledButton } from "./styled";
import EmailInput from "../email-input";
import CpfInput from "../cpf-input";
import BirthInput from "../birth-input";
import PasswordInput from "../password-input";
import CheckboxInput from "../checkbox-input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
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
      <EmailInput
        register={register}
        handleOnChange={handleOnChange}
        errors={errors}
      />

      <div className="register__container">
        <CpfInput
          register={register}
          errors={errors}
          applyMask={applyMask}
          values={values}
        />
        <BirthInput
          register={register}
          errors={errors}
          applyMask={applyMask}
          values={values}
        />
      </div>

      <PasswordInput
        register={register}
        handleOnChange={handleOnChange}
        errors={errors}
        togglePassword={togglePassword}
        showPassword={showPassword}
        applyMask={applyMask}
        values={values}
      />

      <CheckboxInput
        register={register}
        handleOnChange={handleOnChange}
        errors={errors}
        applyMask={applyMask}
        values={values}
      />

      <StyledButton>
        <i className="register__icon--lock">{lock}</i>Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
