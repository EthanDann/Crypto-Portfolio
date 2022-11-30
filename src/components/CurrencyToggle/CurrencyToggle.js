import React from "react";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import {
  DropDownContainer,
  DropDownHeader,
  Input,
  DropDownListContainer,
  DropDownList,
  ListItem,
  DownArrowContainer,
  StyledCurrencyIcon,
  Circle,
} from "./currencyToggle.styled";

function CurrencyToggle(props) {
  let currencies = [...props.supportedCurrencies];
  if (props.activeCurrency.length) {
    const regex = new RegExp(`^${props.activeCurrency}`, "i");
    currencies = [
      ...props.supportedCurrencies.filter((v) => regex.test(v)),
      ...props.supportedCurrencies.filter((v) => !regex.test(v)).sort(),
    ];
  }
  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={props.handleOpen}>
          <Circle>
            <StyledCurrencyIcon value="USD">
              {props.currencySymbol ?? "$"}
            </StyledCurrencyIcon>
          </Circle>
          <Input
            type="text"
            value={props.activeCurrency.toUpperCase() ?? "USD"}
            onChange={props.handleTextChange}
          ></Input>
          <DownArrowContainer>
            {props.isOpen && <UpArrow />}
            {!props.isOpen && <DownArrow />}
          </DownArrowContainer>
        </DropDownHeader>
        {props.isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {currencies.map((currency) => (
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
