import styled from "styled-components";

export const Wrapper = styled.div<{ theme: string; height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.secondary};
  padding: auto;
  margin: auto;
  height: ${({ height }) => height}px;
`;
