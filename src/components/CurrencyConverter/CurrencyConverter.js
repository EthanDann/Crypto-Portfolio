import { useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  Container,
  InputContainer,
  Label,
  Input,
  StyledDarkSwitchIcon,
  StyledLightSwitchIcon,
} from "./CurrencyConverter.styled";

export const CurrencyConverter = (props) => {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);
  const [currencies, setCurrencies] = useState([
    props.activeCurrency,
    props.coinSymbol,
  ]);
  const handleFirstValue = (value) => {
    setFirstValue(value);
  };
  const handleSecondValue = (value) => {
    setSecondValue(value);
  };
  const handleSwitch = () => {
    setFirstValue(convertedValue);
    setSecondValue(firstValue);
    setCurrencies(currencies.reverse());
  };
  const convertedValue =
    currencies[0] !== props.coinSymbol
      ? (firstValue / props.coinPrice).toFixed(6)
      : firstValue * Number(props.coinPrice.toFixed(2));
  return (
    <Container>
      <InputContainer>
        <Label>{currencies[0]}</Label>
        <Input
          value={firstValue}
          thousandSeparator={true}
          prefix={getSymbolFromCurrency(currencies[0])}
          onValueChange={({ value }) => handleFirstValue(Number(value))}
        />
      </InputContainer>
      {props.theme ? (
        <StyledDarkSwitchIcon onClick={handleSwitch} />
      ) : (
        <StyledLightSwitchIcon onClick={handleSwitch} />
      )}
      <InputContainer>
        <Label>{currencies[1]}</Label>
        <Input
          value={convertedValue}
          thousandSeparator={true}
          prefix={getSymbolFromCurrency(currencies[1])}
          onValueChange={({ value }) => handleSecondValue(Number(value))}
        />
      </InputContainer>
    </Container>
  );
};
