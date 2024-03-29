import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 22px;
  @media (max-width: 900px) {
    gap: 20px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const ButtonSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const RadioButton = styled.span<{ isSelected: boolean; type: string }>`
  height: 22px;
  width: 22px;
  cursor: pointer;
  border: solid 1px rgba(0, 125, 95, 1);
  border-radius: 50%;
  background: ${({ isSelected }) =>
    isSelected === true ? "rgba(0, 255, 95, 0.6)" : "none"};
  box-shadow: ${({ isSelected }) =>
    isSelected === true && `0px 0px 0px 2.5px rgba(0, 255, 95, .6)`};
  @media (max-width: 400px) {
    height: 17px;
    width: 17px;
  }
`;

export const ButtonLabel = styled.label`
  line-height: 0px;
`;
