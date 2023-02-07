import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ThemeIcon } from "./Icons/ThemeIcon.svg";

export const Nav = styled.header<{ theme: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
`;
export const Container = styled.div`
  display: flex;
  order: 1;
  justify-content: space-between;
  align-items: center;
`;
export const StyledLink = styled(NavLink)<{ theme: string }>`
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;
export const ThemeContainer = styled.div`
  order: 5;
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
export const StyledThemeIcon = styled(ThemeIcon)`
  border-radius: 10px;
  width: 60%;
  height: auto;
  padding: 0.3rem;
  background-color: transparent;
  &:hover {
    width: 59%;
  }
  @media (max-width: 425px) {
    width: 45%;
    padding: 0.25rem;
  }
`;