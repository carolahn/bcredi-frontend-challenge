import styled from "styled-components";

export const FormWrapper = styled.div`
  /* background-color: blue; */
  width: 56.87vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */

  .form__container {
    width: 320px;
    margin-top: 94px;
    /* height: 100vh; */
    background-color: yellow;
  }

  .form__title {
    height: 30px;
    font-size: 24px;
    line-height: 30px;
    color: var(--base-color-dark-charcoal);
  }
  .form__text {
    height: 54px;
    font-size: 16px;
    line-height: 24px;
    color: var(--base-color-warm-grey);
    margin: 6px auto 0px auto;
  }
`;
