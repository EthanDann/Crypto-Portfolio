import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as DarkSearchIcon } from "components/Navbar/Icons/DarkSearchIcon.svg";

export const SearchContainer = styled.form<{ theme: string }>`
  display: flex;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  :hover {
    cursor: text;
  }
`;

export const StyledSearchIcon = styled.div<{ theme: string }>`
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  height: 3.15rem;
  width: 3rem;
`;
export const StyledDarkSearchIcon = styled(DarkSearchIcon)`
  fill: ${({ theme }) => theme.fontColor};
`;
export const StyledInput = styled.input<{ theme: string }>`
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 50vw;
  height: 25px;
  padding: 0.8rem 0;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }
  &:focus {
    outline: none;
  }
`;
export const StyledLink = styled(NavLink)<{ theme: string }>`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
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
export const ResultsList = styled.ul<{ theme: string }>`
  position: absolute;
  width: 80%;
  background: ${({ theme }) => theme.main};
  border-radius: 10px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  list-style: none;
  right: 10vw;
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
