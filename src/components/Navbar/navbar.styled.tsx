import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as ThemeIcon } from "./Icons/ThemeIcon.svg";
import { ReactComponent as CoinsIcon } from "./Icons/CoinsIcon.svg";
import { ReactComponent as PortfolioIcon } from "./Icons/PortfolioIcon.svg";
import { ReactComponent as SearchIcon } from "./Icons/DarkSearchIcon.svg";

export const Nav = styled.header<{ theme: string }>`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const StyledButton = styled.button<{ theme: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;
  border: none;
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
  @media (min-width: 1024px) {
    display: none;
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
const IconStyle = css`
  margin-bottom: 0.5em;
  max-width: 100%;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const StyledSearchIcon = styled(SearchIcon)`
  ${IconStyle}
  fill: ${({ theme }) => theme.fontColor};
`;
export const StyledCoinsIcon = styled(CoinsIcon)`
  ${IconStyle}
  fill: ${({ theme }) => theme.fontColor};
`;
export const StyledPortfolioIcon: any = styled(PortfolioIcon)`
  ${IconStyle}
  fill: ${({ theme }) => theme.fontColor};
`;
