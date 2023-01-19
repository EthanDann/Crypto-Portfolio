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
  const { handleTheme, theme } = props;
  return (
    <Nav>
      <Container>
        <StyledLink to="/" order={1}>
          Coins
        </StyledLink>
        <StyledLink to="/Portfolio" order={2}>
          Portfolio
        </StyledLink>
        <SearchInput icon />
        <CurrencyToggle />
        <ThemeContainer>
          <Button onClick={handleTheme}>
            {theme === "dark" ? <StyledDarkIcon /> : <StyledLightIcon />}
          </Button>
        </ThemeContainer>
      </Container>
    </Nav>
  );
}

export default Navbar;
