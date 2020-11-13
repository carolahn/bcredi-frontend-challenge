import styled from "styled-components";

export const FormWrapper = styled.div`
  /* background-color: blue; */
  width: 56.87vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 760px;

  .form__container {
    width: 320px;
    margin-top: 94px;
    /* height: 100vh; */
    /* background-color: yellow; */
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

  .form__footer--min-height {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form__footer {
    width: 320px;
    height: 74px;
    border-top: 1px solid #e6e6e6;
    position: fixed;
    bottom: 0px;
  }

  .form__footer > p {
    font-size: 14px;
    line-height: 18px;
    color: var(--base-color-warm-grey);
    margin-top: 16px;
  }
  .form__footer p > a {
    color: #4c8afe;
    text-decoration: none;
  }
  @media (max-height: 760px) {
    /* position: unset;
    display: flex;
    flex-direction: column; */
    .form__footer--min-height {
      position: relative;
    }

    .form__footer {
      position: absolute;
      top: 15px;
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
`;
