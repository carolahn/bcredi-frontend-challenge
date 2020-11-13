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
`;
