import {
  Container,
  InputContainer,
  Label,
  Input,
  StyledDarkSwitchIcon,
  StyledLightSwitchIcon
} from "./CurrencyConverter.styled";

export const CurrencyConverter = (props) => {
  return (
    <Container>
      <InputContainer>
        <Label>{props.activeCurrency}</Label>
        <Input />
      </InputContainer>
      {props.theme ? <StyledDarkSwitchIcon /> : <StyledLightSwitchIcon />}
      <InputContainer>
        <Label>{props.coin}</Label>
        <Input />
      </InputContainer>
    </Container>
  );
};
