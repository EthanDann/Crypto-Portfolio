import { CurrencyToggle, SearchInput } from "components";
import {
  Nav,
  StyledLink,
  Container,
  Button,
  ThemeContainer,
  StyledDarkIcon,
  StyledLightIcon,
} from "./navbar.styled";

function Navbar(props) {
  return (
    <Nav>
      <Container>
        <StyledLink to="/" order={1}>
          Coins
        </StyledLink>
        <StyledLink to="/Portfolio" order={2}>
          Portfolio
        </StyledLink>
        <SearchInput />
        <CurrencyToggle
          supportedCurrencies={props.supportedCurrencies}
          currencySymbol={props.currencySymbol}
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
}

export default Navbar;
