import styled from "styled-components";
import { ReactComponent as DarkSwitchIcon } from "./DarkSwitchIcon.svg";
import { ReactComponent as LightSwitchIcon } from "./LightSwitchIcon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled.label`
  display: flex;
  background: rgb(0, 252, 42);
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  height: auto;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;
export const Input = styled.input`
  font-size: 1rem;
  height: auto;
  width: 70%;
  padding-left: 1rem;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
  border-color: transparent;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
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
