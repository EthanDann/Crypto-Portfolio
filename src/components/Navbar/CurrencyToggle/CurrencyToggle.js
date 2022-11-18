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

const currencies = ["usd", "eur", "cad"];

function CurrencyToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={handleClick}>
          <Circle>
            <StyledCurrencyIcon value="USD">$</StyledCurrencyIcon>
          </Circle>
          {selectedOption || currencies[0].toUpperCase()}
          <DownArrowContainer>
            <DownArrow />
          </DownArrowContainer>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {currencies.map((currency) => (
                <ListItem
                  onClick={onOptionClicked(currency)}
                  key={Math.random()}
                >
                  <span>{currency}</span>
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
