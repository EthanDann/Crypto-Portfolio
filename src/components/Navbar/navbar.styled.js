import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DarkIcon } from "./Icons/DarkIcon.svg";
import { ReactComponent as LightIcon } from "./Icons/LightIcon.svg";
import { ReactComponent as DownArrow } from "./Icons/DownArrow.svg";

export const Nav = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
export const NavLink = styled(Link)`
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.secondary};
    cursor: pointer;
  }
`;
export const StyledSelect = styled.select`
  position: absolute;
  right: 6.5%;
  appearance: none;
  text-align-last: right;
  padding-right: 2rem;
  direction: rtl;
  border: none;
  margin: 1rem;
  color: white;
  outline: none;
  display: grid;
  align-items: center;
  width: 7rem;
  height: 3rem;
  border-radius: 10px;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.secondary};
`;
export const StyledOption = styled.option`
  text-align: center;
`;
export const Container = styled.div`
  position: absolute;
  left: 47%;
  width: 30%;
`;
export const StyledThemeButton = styled.div`
  position: absolute;
  right: 0;
  top: 0.7rem;
`;
export const StyledSearchIcon = styled.div`
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2.3%;
  left: 44%;
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  height: 2.95rem;
  width: 4rem;
`;
export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-radius: 10px;
  margin: 1.1rem;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  border: none;
  width: 5rem;
  height: auto;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledDarkIcon = styled(DarkIcon)`
  border-radius: 10px;
  width: 60%;
  height: auto;
  padding: 0.3rem;
  background-color: #1e2128;
  &:hover {
    width: 59%;
  }
`;
export const StyledLightIcon = styled(LightIcon)`
  border-radius: 10px;
  width: 60%;
  height: auto;
  padding: 0.3rem;
  background-color: #f7f7f7;
  &:hover {
    width: 59%;
  }
`;
export const StyledDownArrow = styled(DownArrow)`
  position: absolute;
  right: 8.5%;
  top: 4.7%;
  z-index: 2;
`;
export const StyledCurrencyIcon = styled.div`
  position: absolute;
  right: 14.6%;
  top: 3.8%;
  z-index: 4;
  color: rgb(0, 252, 42);
  font-size: 1.2rem;
`;
export const Circle = styled.div`
  position: absolute;
  right: 13.8%;
  top: 3.4%;
  z-index: 3;
  background-color: ${(props) => props.theme.main};
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: inline-block;
`;
