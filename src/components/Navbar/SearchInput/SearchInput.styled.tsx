import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as DarkSearchIcon } from "components/Navbar/Icons/DarkSearchIcon.svg";
import { ReactComponent as LightSearchIcon } from "components/Navbar/Icons/LightSearchIcon.svg";

export const SearchContainer = styled.form<{ theme: string }>`
  display: flex;
  width: 408px;
  height: 50px;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  align-items: center;
  :hover {
    cursor: text;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const StyledSearchIcon = styled.div<{ theme: string }>`
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  transition: ${({ theme }) => theme.transition};
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
  fill: ${({ theme }) => theme.fontColor};
  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
  }
`;
export const StyledInput = styled.input<{ theme: string }>`
  background-color: ${({ theme }) => theme.secondary};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 35vw;
  padding: 0.8rem 0;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
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
export const StyledLink = styled(NavLink)<{ theme: string }>`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.primary};
    text-decoration: none;
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
export const ResultsList = styled.ul<{ theme: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 408px;
  z-index: 999;
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  list-style: none;
  right: 32.8vw;
  top: 25px;
  max-height: 210px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  overflow: auto;
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
export const ListItem = styled.li<{ theme: string }>`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.fontColor};
  padding: 0.5em 0;
  font-size: 1.1rem;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
