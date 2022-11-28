import React from "react";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
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
            <StyledCurrencyIcon value="USD">
              {props.currencySymbol ?? "$"}
            </StyledCurrencyIcon>
          </Circle>
          {props.activeCurrency.toUpperCase() ??
            props.supportedCurrencies[0].toUpperCase()}
          <DownArrowContainer>
            {props.isOpen && <UpArrow />}
            {!props.isOpen && <DownArrow />}
          </DownArrowContainer>
        </DropDownHeader>
        {props.isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.supportedCurrencies.map((currency) => (
                <ListItem
                  onClick={props.handleCurrency}
                  key={Math.random()}
                  value={currency}
                >
                  {currency.toUpperCase()}
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
