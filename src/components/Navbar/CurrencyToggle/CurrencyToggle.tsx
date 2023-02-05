import { useState, useEffect, useRef } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import useOnClickOutside from "use-onclickoutside";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  toggleCurrency,
  selectCurrency,
} from "store/currencies/currenciesSlicer";
import { getSupportedCurrencies } from "store/supportedCurrencies/supportedCurrenciesSlicer";
import { ReactComponent as DownArrow } from "components/Navbar/Icons/DownArrow.svg";
import { ReactComponent as UpArrow } from "components/Navbar/Icons/UpArrow.svg";
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

const CurrencyToggle = () => {
  const dispatch = useAppDispatch();
  const activeCurrency = useAppSelector(selectCurrency);
  const currencySymbol = getSymbolFromCurrency(activeCurrency);
  const { supportedCurrencies } = useAppSelector(
    (state) => state.supportedCurrencies
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState(activeCurrency);
  const handleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    dispatch(getSupportedCurrencies());
  }, [dispatch]);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleToggle = (currency: string) => {
    setCurrency(currency);
    dispatch(toggleCurrency(String(currency)));
    setIsOpen(false);
  };
  const handleTextToggle = (currency: string) => {
    setCurrency(currency);
    dispatch(toggleCurrency(String(currency)));
    currency.length === 3 ? setIsOpen(false) : setIsOpen(true);
  };
  const currencies = [...supportedCurrencies].sort((a, b) => {
    if (a.startsWith(activeCurrency)) return -1;
    if (b.startsWith(activeCurrency)) return 1;
    return a.localeCompare(b);
  });

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={() => handleOpen()}>
          <Circle>
            <StyledCurrencyIcon>{currencySymbol}</StyledCurrencyIcon>
          </Circle>
          <Input
            type="text"
            value={currency.toUpperCase() ?? "USD"}
            onChange={(e) => handleTextToggle(e.target.value)}
          ></Input>
          <DownArrowContainer>
            {isOpen && <UpArrow />}
            {!isOpen && <DownArrow />}
          </DownArrowContainer>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer ref={ref}>
            <DropDownList>
              {supportedCurrencies &&
                currencies.map((currency) => (
                  <ListItem
                    onClick={() => handleToggle(currency)}
                    key={currency}
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
};
export default CurrencyToggle;
