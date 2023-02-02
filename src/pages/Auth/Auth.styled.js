import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: ${(props) => props.theme.secondary};
  padding: 0;
  margin: 0;
  max-height: ${(props) => props.height}px;
  height: 850px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const Header = styled.h1`
  color: ${(props) => props.theme.fontColor};
  @media (min-width: 768px) {
    margin-top: 10rem;
  }
`;
