import React from "react";
import { CurrencyToggle } from "components";
import {
  Nav,
  StyledLink,
  Container,
  SearchContainer,
  StyledSearchIcon,
  StyledLightSearchIcon,
  StyledDarkSearchIcon,
  StyledInput,
  Button,
  ThemeContainer,
  StyledDarkIcon,
  StyledLightIcon,
} from "./navbar.styled";

const Navbar = (props) => {
  return (
    <Nav>
      <Container>
        <StyledLink to="/" order={1}>
          Coins
        </StyledLink>
        <StyledLink to="/Portfolio" order={2}>
          Portfolio
        </StyledLink>
        <SearchContainer>
          <StyledSearchIcon>
            {props.theme ? <StyledDarkSearchIcon /> : <StyledLightSearchIcon />}
          </StyledSearchIcon>
          <StyledInput type="text" placeholder="Search..." />
        </SearchContainer>
        <CurrencyToggle
          supportedCurrencies={props.supportedCurrencies}
          currencySymbol={props.currencySymbol}
          isOpen={props.isOpen}
          handleOpen={props.handleOpen}
          activeCurrency={props.activeCurrency}
          handleCurrency={props.handleCurrency}
          handleTextChange={props.handleTextChange}
        />
        <ThemeContainer>
          <Button onClick={props.handleTheme}>
            {props.theme ? <StyledDarkIcon /> : <StyledLightIcon />}
          </Button>
        </ThemeContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
