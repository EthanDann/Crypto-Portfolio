import styled from "styled-components";

export const Button = styled.button`
  background: rgb(6, 213, 84);
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;

  &:hover {
    background: rgb(10, 185, 90);
  }
  @media (min-width: 1024px) {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
`;
