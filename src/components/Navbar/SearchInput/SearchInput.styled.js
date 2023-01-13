import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DarkSearchIcon } from "./DarkSearchIcon.svg";
import { ReactComponent as LightSearchIcon } from "./LightSearchIcon.svg";

export const SearchContainer = styled.form`
  display: flex;
  width: 408px;
  height: 50px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  gap: 16px;
  align-items: center;
  position: relative;
  :hover {
    cursor: text;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const StyledSearchIcon = styled.div`
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  height: 2.95rem;
  width: 4rem;
`;
export const StyledLightSearchIcon = styled(LightSearchIcon)`
  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
  }
`;
export const StyledDarkSearchIcon = styled(DarkSearchIcon)`
  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
  }
`;
export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 35vw;
  padding: 0.8rem 0;
  font-size: 1.1rem;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 20vw;
  }
  @media (max-width: 425px) {
    border-radius: 10px;
    font-size: 0.8rem;
    padding-left: 0.8rem;
    width: 25vw;
    height: 1vh;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.secondary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Wrapper = styled.div`
  width: 408px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  display: ${(props) =>
    props.showResults && props.results.length > 0 ? "flex" : " none"};
  position: absolute;
  top: 66px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
