import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DarkIcon } from "./Icons/DarkIcon.svg";
import { ReactComponent as LightIcon } from "./Icons/LightIcon.svg";
import { ReactComponent as DarkSearchIcon } from "./Icons/DarkSearchIcon.svg";
import { ReactComponent as LightSearchIcon } from "./Icons/LightSearchIcon.svg";

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
export const StyledLink = styled(NavLink)`
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
  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  order: 2;
  flex-direction: row;
  @media (max-width: 425px) {
    width: 25%;
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
  @media (max-width: 425px) {
    width: 45%;
    padding: 0.25rem;
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
  @media (max-width: 425px) {
    width: 45%;
    padding: 0.25rem;
  }
`;
