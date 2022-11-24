import React from "react";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { currencies } from "./currencies";
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

function CurrencyToggle(props) {
  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={props.handleOpen}>
          <Circle>
            <StyledCurrencyIcon value="USD">$</StyledCurrencyIcon>
          </Circle>
          {props.activeCurrency ?? currencies.data[0].name}
          <DownArrowContainer>
            <DownArrow />
          </DownArrowContainer>
        </DropDownHeader>
        {props.isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {currencies.data.map((currency) => (
                <ListItem
                  onClick={props.handleCurrency}
                  key={Math.random()}
                  value={currency.name}
                >
                  {currency.name}
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
