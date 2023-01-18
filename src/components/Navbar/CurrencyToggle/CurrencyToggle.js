import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getSupportedCurrencies } from "store/currencies/action";
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
  useEffect(() => {
    console.log(props);
    props.getSupportedCurrencies();
    //eslint-disable-next-line
  }, []);
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
  const {
    activeCurrency,
    currencySymbol,
    // supportedCurrencies,
    handleTextChange,
    handleCurrency,
  } = props;
  // let currencies = [supportedCurrencies];
  // if (activeCurrency.length) {
  //   const regex = new RegExp(`^${activeCurrency}`, "i");
  //   currencies = [
  //     supportedCurrencies.filter((v) => regex.test(v)),
  //     supportedCurrencies.filter((v) => !regex.test(v)).sort(),
  //   ];
  // }
  return (
    <>
      <DropDownContainer>
        <DropDownHeader ref={dropdownRef} onClick={() => handleOpen()}>
          <Circle>
            <StyledCurrencyIcon value="USD">
              {currencySymbol ?? "$"}
            </StyledCurrencyIcon>
          </Circle>
          <Input
            type="text"
            value={activeCurrency.toUpperCase() ?? "USD"}
            onChange={handleTextChange}
          ></Input>
          <DownArrowContainer>
            {isOpen && <UpArrow />}
            {!isOpen && <DownArrow />}
          </DownArrowContainer>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.supportedCurrencies.map((currency, index) => (
                <ListItem
                  onClick={handleCurrency}
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
});
const mapDispatchToProps = {
  getSupportedCurrencies,
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyToggle);
