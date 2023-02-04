import { useState, useEffect, useRef } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import useOnClickOutside from "use-onclickoutside";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  toggleCurrency,
  selectCurrency,
} from "store/currencies/currenciesSlicer";
import { getSupportedCurrencies } from "store/supportedCurrencies/supportedCurrenciesSlicer";
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
  }, []);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleToggle = (currency: string) => {
    setCurrency(currency);
    dispatch(toggleCurrency(String(currency)));
    setIsOpen(false);
  };
  const handleTextToggle = (currency: string) => {
    setCurrency(currency);
    console.log(currency);
    dispatch(toggleCurrency(String(currency)));
    currency.length === 3 ? setIsOpen(false) : setIsOpen(true);
  };
  let currencies = [...supportedCurrencies];
  if (activeCurrency.length) {
    const regex = new RegExp(`^${activeCurrency}`, "i");
    currencies = [
      ...supportedCurrencies.filter((v) => regex.test(v)),
      ...supportedCurrencies.filter((v) => !regex.test(v)).sort(),
    ];
  }
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
};
export default CurrencyToggle;
