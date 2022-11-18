import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DarkIcon } from "./Icons/DarkIcon.svg";
import { ReactComponent as LightIcon } from "./Icons/LightIcon.svg";

export const Nav = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
export const Container = styled.div`
  display: flex;
  order: 1;
  justify-content: space-between;
  align-items: center;
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

export const SearchContainer = styled.div`
  display: flex;
  order: 2;
  flex-direction: row;
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
`;

export const ThemeContainer = styled.div`
  order: 4;
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
