import styled from "styled-components";
import { NumericFormat } from "react-number-format";
import { ReactComponent as DarkSwitchIcon } from "./DarkSwitchIcon.svg";
import { ReactComponent as LightSwitchIcon } from "./LightSwitchIcon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const InputContainer = styled.div`
  display: flex;
`;
export const Label = styled.label`
  display: flex;
  background: rgb(0, 252, 42);
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  height: 100%;
  width: 30%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;
export const Input = styled(NumericFormat)`
  align-items: center;
  font-size: 1rem;
  width: 70%;
  padding-left: 1rem;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
  border-color: transparent;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  &:focus,
  &:active {
    outline: none;
  }
`;
export const StyledDarkSwitchIcon = styled(DarkSwitchIcon)`
  cursor: pointer;
  margin: 0 2rem;
  height: 40px;
`;
export const StyledLightSwitchIcon = styled(LightSwitchIcon)`
  cursor: pointer;
  margin: 0 2rem;
  height: 40px;
`;
