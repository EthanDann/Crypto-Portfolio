import styled from "styled-components";

export const Wrapper = styled.div<{ theme: string; height: number }>`
  display: flex;
  z-index: 1000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: ${({ theme }) => theme.secondary};
  padding: 0;
  margin: 0;
  border-radius: 10px;
  height: ${({ height }) => height}px;
`;
export const Header = styled.h1<{ theme: string }>`
  color: ${({ theme }) => theme.fontColor};
`;
