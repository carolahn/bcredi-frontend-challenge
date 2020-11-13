import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .register__input-wrapper {
    position: relative;
    text-align: left;
    margin-top: 23px;
  }

  .register__label {
    width: 320px;
    font-size: 14px;
    line-height: 18px;
    color: var(--base-color-warm-grey);
    text-align: left;
    margin-top: 23px;
  }

  .register__label--small {
    width: 148px;
  }

  .register__message {
    width: 320px;
    font-size: 14px;
    line-height: 18px;
    color: var(--base-color-wild-watermelon);
    text-align: left;
    position: absolute;
    /* top: ${(props) => props.top || "78px"}; */
  }

  .register__container {
    width: 320px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .register__small-input-container {
    width: 148px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .register__input--toggle-eye {
    position: relative;
    display: flex;
  }
  i {
    position: absolute;
    top: 38%;
    right: 5%;
    color: var(--base-color-warm-grey);
  }

  i:hover {
    color: var(--base-color-dark-charcoal);
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  height: 48px;
  width: ${(props) => props.width};
  margin: 7px auto 5px auto;
  border-radius: 3px;
  padding-left: 14px;
  outline: none;

  &:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const StyledMessage = styled.div`
  position: absolute;
  top: ${(props) => props.top || "78px"};
`;
