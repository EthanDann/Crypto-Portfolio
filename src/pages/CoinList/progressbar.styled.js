import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width}%;
  padding: ${({ padding }) => padding}rem;
  background: rgb(71, 76, 119);
  position: relative;
  border-radius: 10px;
  margin: auto 0;
  overflow: hidden;
  border: none;
  margin-right: auto;
`;

const BaseBox = styled.div`
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  border: none;
`;

export const Progress = styled(BaseBox)`
  background: rgb(138, 146, 178);
  width: ${({ percent }) => percent}%;
  min-width: ${({ percent }) => (percent < 2 ? "2" : percent)}%;
`;
