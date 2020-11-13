import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormWrapper } from "./styled";
import RegisterForm from "../../components/register-form";

const RegisterFormContainer = () => {
  const [values, setValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  const handleOnChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const applyMask = (value, key) => {
    setValues({ ...values, [key]: value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormWrapper className="form">
      <div className="form__container">
        <div className="form__title">Criar meu cadastro</div>
        <div className="form__text">
          Para acompanhar sua contratação de crédito você utilizará seu e-mail e
          CPF.
        </div>

        <RegisterForm
          className="form__inputs"
          values={values}
          onSubmit={onSubmit}
          formErrors={{ register, handleSubmit, errors }}
          handleOnChange={handleOnChange}
          applyMask={applyMask}
          togglePassword={togglePassword}
          showPassword={showPassword}
        />
      </div>
    </FormWrapper>
  );
};

export default RegisterFormContainer;
