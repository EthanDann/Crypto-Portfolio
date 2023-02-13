import styled from "styled-components";

export const Wrapper = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 225px;
  margin-left: -16px;
  @media (max-width: 400px) {
    display: none;
  }
`;
