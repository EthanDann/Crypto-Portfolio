import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  background: ${(props) => props.theme.secondary};
  padding: 0;
  margin: 0;
  max-height: 100%;
  height: 850px;
`;
export const Header = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
