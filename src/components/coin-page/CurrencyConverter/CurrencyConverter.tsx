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

interface Props {
  activeCurrency: string | any;
  coinPrice: number;
  coinSymbol: string;
  theme: string;
}

export const CurrencyConverter: React.FC<Props> = ({
  activeCurrency,
  coinPrice,
  coinSymbol,
  theme,
}) => {
  const [firstValue, setFirstValue] = useState<any | number>(1);
  const [secondValue, setSecondValue] = useState<any | number>(1);
  const [currencies, setCurrencies] = useState<any[]>([
    activeCurrency,
    coinSymbol,
  ]);
  const handleFirstValue = (value: number) => {
    setFirstValue(value);
  };
  const handleSecondValue = (value: number) => {
    setSecondValue(value);
  };
  const handleSwitch = () => {
    setFirstValue(convertedValue);
    setSecondValue(firstValue);
    setCurrencies(currencies.reverse());
  };
  const convertedValue =
    currencies[0] !== coinSymbol
      ? (firstValue / coinPrice).toFixed(6)
      : firstValue * Number(coinPrice.toFixed(2));
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
      {theme ? (
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
