import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmationMessage, FormWrapper } from "./styled";
import RegisterForm from "../../components/register-form";
import { saveUserInfo } from "../../redux/actions/user";

const RegisterFormContainer = () => {
  const [values, setValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { handleSubmit, register, errors, reset } = useForm();
  const bcrypt = require("bcryptjs");
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);

  const defaultValues = {
    email: "",
    cpf: "",
    birth: "",
    password: "",
  };

  const onSubmit = (values) => {
    values.password = bcrypt.hashSync(values.password, 10);
    dispatch(saveUserInfo(values));
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  useEffect(() => {
    reset(defaultValues);
    setValues(defaultValues);
    // eslint-disable-next-line
  }, [showConfirmation]);

  useEffect(() => {
    console.log("Registry data from state.user.user:");
    console.log(user_info);
  }, [user_info]);

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
