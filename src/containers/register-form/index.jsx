import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ConfirmationMessage, FormWrapper } from "./styled";
import RegisterForm from "../../components/register-form";

const RegisterFormContainer = () => {
  const [values, setValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { handleSubmit, register, errors, reset } = useForm();

  const defaultValues = {
    email: "",
    cpf: "",
    birth: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  useEffect(() => {
    reset(defaultValues);
    setValues(defaultValues);
  }, [showConfirmation]);

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
      {showConfirmation && (
        <ConfirmationMessage>
          Parabéns! Cadastro realizado com sucesso!
        </ConfirmationMessage>
      )}

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
      <div className="form__footer--min-height">
        <div className="form__footer">
          <p>
            Já fiz o meu cadastro. <a href="#entrar">Entrar agora.</a>
          </p>
        </div>
      </div>
    </FormWrapper>
  );
};

export default RegisterFormContainer;
