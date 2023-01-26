import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as DarkSearchIcon } from "./DarkSearchIcon.svg";
import { ReactComponent as LightSearchIcon } from "./LightSearchIcon.svg";

export const SearchContainer = styled.form`
  display: flex;
  width: 408px;
  height: 50px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
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
  background-color: ${(props) =>
    props.main ? props.theme.main : props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 35vw;
  padding: 0.8rem 0;
  padding-left: 2rem;
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
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const ResultsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  display: ${(props) =>
    props.showResults && props.results.length > 0 ? "flex" : " none"};
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  list-style: none;
  position: absolute;
  right: 0vw;
  max-height: 210px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 0;
  margin-top: 2.7em;
  animation: ${fadeIn} 0.1s ease-in-out;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2c2f36;
    outline: 1px solid #2c2f36;
    border-radius: 4px;
  }
  &:input:not(:focus) {
    display: none;
  }
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.fontColor};
  padding: 0.5em 0;
  font-size: 1.1rem;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;
