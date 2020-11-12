import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  }
`;

export const StyledInput = styled.input`
  height: 48px;
  width: 320px;
  margin: 7px auto 5px auto;
  border-radius: 3px;
  padding-left: 14px;
  outline: none;
  appearance: none;
`;

export const StyledInputSmall = styled.input`
  height: 48px;
  width: 148px;
  margin: 7px auto 5px auto;
  border-radius: 3px;
  padding-left: 14px;
  outline: none;
  appearance: none;
`;
