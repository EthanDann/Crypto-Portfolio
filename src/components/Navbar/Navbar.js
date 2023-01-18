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
  const {
    supportedCurrencies,
    currencySymbol,
    activeCurrency,
    handleCurrency,
    handleTextChange,
    handleTheme,
    theme,
  } = props;
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
          supportedCurrencies={supportedCurrencies}
          currencySymbol={currencySymbol}
          activeCurrency={activeCurrency}
          handleCurrency={handleCurrency}
          handleTextChange={handleTextChange}
        />
        <ThemeContainer>
          <Button onClick={handleTheme}>
            {theme ? <StyledDarkIcon /> : <StyledLightIcon />}
          </Button>
        </ThemeContainer>
      </Container>
    </Nav>
  );
}

export default Navbar;
