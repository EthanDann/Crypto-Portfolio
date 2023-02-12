import styled, { keyframes } from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  height: auto;
  border-radius: 10px;
  align-items: center;
  position: relative;
  :hover {
    cursor: text;
  }
  @media (min-width: 768px) {
    height: 50px;
  }
`;
export const StyledInput = styled.input<{ theme: string }>`
  background-color: ${({ theme }) => theme.secondary};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 71.5%;
  padding: 0.8rem 0;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 80.5%;
  }
  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.main};
  }
  @media (min-width: 2560px) {
    font-size: 1.4rem;
  }
  @media (max-width: 425px) {
    border-radius: 10px;
    font-size: 0.8rem;
    padding-left: 0.8rem;
    height: 1vh;
  }
`;
export const StyledText = styled.p<{ theme: string }>`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  margin-left: 1rem;
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
export const ResultsList = styled.ul<{
  theme: string;
  showResults: boolean;
  results: any[];
}>`
  display: flex;
  flex-direction: column;
  width: 77%;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  display: ${({ showResults, results }) =>
    showResults && results.length > 0 ? "flex" : " none"};
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  list-style: none;
  position: absolute;
  left: 0;
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
  @media (min-width: 768px) {
    width: 88%;
  }
`;
export const ListItem = styled.li<{ theme: string }>`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.fontColor};
  padding: 0.5em 0;
  font-size: 1.1rem;
  cursor: pointer;
  overflow: none;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
