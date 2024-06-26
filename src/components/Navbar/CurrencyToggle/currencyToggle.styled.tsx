import styled from "styled-components";

export const DropDownContainer = styled.div<{ theme: string }>`
  display: none;
  @media (min-width: 430px) {
    display: flex;
    justify-content: center;
    width: 90px;
    background: ${({ theme }) => theme.secondary};
    border-radius: 6px;
    margin-right: 1.5em;
    padding: 0.65em 0.5em;
    height: 100%;
  }
  @media (max-width: 768px) {
    margin-left: 2.4em;
  }
  @media (max-width: 665px) {
    display: none;
  }
`;

export const DropDownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Input = styled.input<{ theme: string }>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  font-size: 1rem;
  padding-left: 0.5rem;
  width: 70%;
  border-radius: 0 12px 12px 0;
  border: none;
  box-shadow: none;
  &:focus,
  &:hover {
    outline: none;
  }
`;

export const DropDownListContainer = styled.div`
  display: flex;
`;
export const DropDownList = styled.ul<{ theme: string }>`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  list-style: none;
  position: absolute;
  left: 75%;
  background: ${({ theme }) => theme.main};
  width: 100%;
  max-height: 220px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 999;
  max-width: 100px;
  padding: 0;
  margin-top: 2.7em;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2c2f36;
    outline: 1px solid #2c2f36;
    border-radius: 4px;
  }
  @media (min-width: 1024px) {
    right: 23vw;
  }
  @media (min-width: 1200px) {
    right: 24.7vw;
  }
  @media (min-width: 1440px) {
    right: 27.8vw;
  }
  @media (min-width: 2560px) {
    right: 33vw;
  }
`;

export const ListItem = styled.li<{ theme: string }>`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
  padding: 0.5em 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  overflow: auto;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
export const DownArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.2em;
  background: transparent;
`;
export const StyledCurrencyIcon = styled.div`
  color: rgb(0, 252, 40);
`;
export const Circle = styled.div<{ theme: string }>`
  margin: 0 5px;
  z-index: 3;
  background-color: ${({ theme }) => theme.main};
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
