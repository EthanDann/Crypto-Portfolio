import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.fontColor};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Summary = styled.div`
  display: flex;
  order: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
`;

export const Header = styled.h2`
  color: ${(props) => props.theme.fontColor};
`;
