import { StyledForm } from "./styled";
import EmailInput from "../email-input";
import CpfInput from "../cpf-input";
import BirthInput from "../birth-input";
import PasswordInput from "../password-input";
import CheckboxInput from "../checkbox-input";
import RegisterButton from "../register-button";

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

      <RegisterButton />
    </StyledForm>
  );
};

export default RegisterForm;
