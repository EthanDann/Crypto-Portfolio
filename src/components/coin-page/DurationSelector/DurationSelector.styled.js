import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 22px;
  @media (max-width: 900px) {
    gap: 20px;
  }
`;

export const ButtonSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const RadioButton = styled.span`
  height: 22px;
  width: 22px;
  cursor: pointer;
  border: solid 1px rgba(0, 125, 95, 1);
  border-radius: 50%;
  background: ${(props) =>
    props.isSelected === true ? "rgba(0, 255, 95, 0.6)" : "none"};
  box-shadow: ${(props) =>
    props.isSelected === true && `0px 0px 0px 2.5px rgba(0, 255, 95, .6)`};
`;

export const ButtonLabel = styled.label`
  line-height: 0px;
`;
