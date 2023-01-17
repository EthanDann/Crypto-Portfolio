import { useState, useEffect, useRef } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  const dropdownRef = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      const node = dropdownRef.current;
      if (node && !node.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <DropDownHeader ref={dropdownRef} onClick={() => handleOpen()}>
          <Circle>
            <StyledCurrencyIcon value="USD">
              {props.currencySymbol ?? "$"}
            </StyledCurrencyIcon>
          </Circle>
          <Input
            type="text"
            value={props.activeCurrency.toUpperCase() ?? "USD"}
            onChange={() => props.handleTextChange()}
          ></Input>
          <DownArrowContainer>
            {isOpen && <UpArrow />}
            {!isOpen && <DownArrow />}
          </DownArrowContainer>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {currencies.map((currency) => (
                <ListItem
                  onClick={() => props.handleCurrency()}
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
