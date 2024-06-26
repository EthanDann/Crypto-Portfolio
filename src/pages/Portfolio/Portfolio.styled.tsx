import styled from "styled-components";

export const Container = styled.div<{
  theme: string;
  height: number;
  assets: any[];
  isOpen: boolean;
}>`
  display: flex;
  z-index: 1;
  background: ${({ theme }) => theme.main};
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  height: ${({ height }) => height}px;
  min-height: ${({ assets }) => (assets.length === 1 ? "600px" : "auto")};
  filter: ${({ isOpen }) => (isOpen ? "brightness(0.8)" : "none")};
  @media (min-width: 1024px) {
    background: ${({ theme }) => theme.secondary};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  @media (min-width: 768px) {
    margin-top: 5rem;
  }
`;
export const Button = styled.button`
  background: rgb(6, 213, 84);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 6rem;
  border: none;
  border-radius: 10px;
  &:hover {
    background: rgb(6, 175, 84);
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
    padding: 2rem 10rem;
  }
  @media (max-width: 320px) {
    padding: 0.9rem 7rem;
  }
`;
export const Header = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-weight: 400;
  margin-bottom: 1.8em;
  font-size: 1.5rem;
  margin: 0 1em 2em 1em;
  padding-top: 1em;
  @media (min-width: 2560px) {
    font-size: 1.5rem;
    margin: 0 1em 2em 1em;
  }
`;
export const Row = styled.div<{ theme: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 2560px) {
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    border-bottom: 3px solid ${({ theme }) => theme.secondary};
  }
`;
