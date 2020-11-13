import styled from "styled-components";
import logo from "../../assets/images/bcredi-logo.svg";

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  width: 75px;
  height: 24px;
  background-image: url(${logo});
  position: absolute;
  right: 32px;
  top: 16px;

  @media (max-width: 600px) {
    width: 100vw;
    height: 64px;
    right: 0px;
    padding-top: 10px;
    padding-right: 32px;
    background-repeat: no-repeat;
    background-position-x: right;
    background-origin: content-box;
    border-bottom: 1px solid #e6e6e6;
  }
`;
