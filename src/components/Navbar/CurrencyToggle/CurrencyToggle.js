import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  getSupportedCurrencies,
  toggleCurrency,
} from "store/currencies/action";
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
  const handleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    props.getSupportedCurrencies();
    //eslint-disable-next-line
  }, []);

  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const handleToggle = (currency) => {
    props.toggleCurrency(currency);
    setIsOpen(false);
  };
  const handleTextToggle = (currency) => {
    props.toggleCurrency(currency);
    currency.length === 3 ? setIsOpen(false) : setIsOpen(true);
  };
  const { activeCurrency, currencySymbol, supportedCurrencies } = props;
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
            <StyledCurrencyIcon value="USD">
              {currencySymbol}
            </StyledCurrencyIcon>
          </Circle>
          <Input
            type="text"
            value={activeCurrency.toUpperCase() ?? "USD"}
            onChange={(e) => handleTextToggle(e.target.value)}
          ></Input>
          <DownArrowContainer>
            {isOpen && <UpArrow />}
            {!isOpen && <DownArrow />}
          </DownArrowContainer>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer ref={dropdownRef}>
            <DropDownList>
              {currencies.map((currency) => (
                <ListItem
                  onClick={() => handleToggle(currency)}
                  key={Math.random()}
                  name={currency}
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

const mapStateToProps = (state) => ({
  supportedCurrencies: state.supportedCurrencies.data,
  activeCurrency: state.supportedCurrencies.activeCurrency,
  currencySymbol: state.supportedCurrencies.currencySymbol,
});
const mapDispatchToProps = {
  getSupportedCurrencies,
  toggleCurrency,
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyToggle);
