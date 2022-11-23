import React, { useState } from "react";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  DownArrowContainer,
  StyledCurrencyIcon,
  Circle,
} from "./currencyToggle.styled";

const currencies = {
  data: [
    {
      name: "USD",
      symbol: "$",
    },
    {
      name: "EUR",
      symbol: "€",
    },
    {
      name: "CAD",
      symbol: "CAD$",
    },
  ],
};

function CurrencyToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedCurrency(value);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={handleClick}>
          <Circle>
            <StyledCurrencyIcon value="USD">$</StyledCurrencyIcon>
          </Circle>
          {selectedCurrency ?? currencies.data[0].name}
          <DownArrowContainer>
            <DownArrow />
          </DownArrowContainer>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {currencies.data.map((currency) => (
                <ListItem
                  onClick={onOptionClicked(currency.name)}
                  key={Math.random()}
                  value={currency.symbol}
                >
                  <span>{currency.name}</span>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
}

export default CurrencyToggle;
